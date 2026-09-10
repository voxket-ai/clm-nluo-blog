import mongoose, { Schema, model, models, type Model, type InferSchemaType } from 'mongoose'

export { EVENT_CATEGORIES } from '@/lib/eventOptions'

const EventSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 220 },
    slug: { type: String, required: true, unique: true },
    subtitle: { type: String, trim: true, default: '', maxlength: 220 },
    description: { type: String, required: true, maxlength: 4000 },
    /** Free text — the site shows ranges like "29th January – 2nd February, 2025". */
    date: { type: String, required: true, trim: true, maxlength: 120 },
    time: { type: String, trim: true, default: '', maxlength: 120 },
    location: { type: String, trim: true, default: '', maxlength: 200 },
    category: { type: String, trim: true, default: 'Event', maxlength: 60 },
    speakers: { type: [String], default: [] },
    attendees: { type: String, trim: true, default: '', maxlength: 200 },
    registrationLink: { type: String, trim: true, default: '', maxlength: 500 },
    image: { type: String, default: '' },
    /** Set for the events that have a bespoke, hand-built detail page. */
    detailPath: { type: String, trim: true, default: '', maxlength: 200 },
    /** Upcoming events sort to the top and show a registration call to action. */
    upcoming: { type: Boolean, default: false },
    status: { type: String, trim: true, default: '', maxlength: 60 },
    /** Higher sorts first within its group; ties fall back to creation order. */
    order: { type: Number, default: 0 },
    createdBy: { type: String, default: 'admin', maxlength: 90 },
  },
  { timestamps: true }
)

EventSchema.index({ upcoming: -1, order: -1, createdAt: -1 })

export type EventDoc = InferSchemaType<typeof EventSchema> & { _id: mongoose.Types.ObjectId }

const Event = (models.Event as Model<EventDoc>) || model<EventDoc>('Event', EventSchema)

export default Event
