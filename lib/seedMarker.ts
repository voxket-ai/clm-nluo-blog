import 'server-only'
import mongoose from 'mongoose'
import { connectToDatabase } from '@/lib/mongodb'

/**
 * Records that a one-time seed has run.
 *
 * Seeding used to be guarded by "is the collection empty?", which meant an
 * administrator who deleted every event or every person would see them all
 * reappear on the next page load. A marker survives an empty collection, so
 * deleting everything stays deleted.
 */
const MarkerSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
  },
  { timestamps: true }
)

type MarkerDoc = { key: string }

const SeedMarker =
  (mongoose.models.SeedMarker as mongoose.Model<MarkerDoc>) ||
  mongoose.model<MarkerDoc>('SeedMarker', MarkerSchema)

/**
 * Runs `seed` once, ever.
 *
 * `alreadyPopulated` covers databases that were seeded before this marker
 * existed: rows are present, so record the marker and skip.
 */
export async function runOnce(key: string, alreadyPopulated: () => Promise<boolean>, seed: () => Promise<void>) {
  await connectToDatabase()

  if (await SeedMarker.exists({ key })) return

  if (await alreadyPopulated()) {
    await SeedMarker.updateOne({ key }, { $set: { key } }, { upsert: true }).catch(() => {})
    return
  }

  await seed()
  // Upsert rather than create: two cold starts can race here.
  await SeedMarker.updateOne({ key }, { $set: { key } }, { upsert: true }).catch(() => {})
}
