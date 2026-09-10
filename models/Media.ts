import mongoose, { Schema, model, models, type Model, type InferSchemaType } from 'mongoose'

/**
 * Uploaded images live in MongoDB rather than on disk: the app is expected to
 * run on a serverless host where the filesystem is ephemeral, so an uploaded
 * file written to /public would vanish on the next deploy.
 */
const MediaSchema = new Schema(
  {
    filename: { type: String, required: true, maxlength: 260 },
    contentType: { type: String, required: true, maxlength: 100 },
    size: { type: Number, required: true },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    data: { type: Buffer, required: true },
    uploadedBy: { type: String, default: 'admin', maxlength: 90 },
  },
  { timestamps: true }
)

export type MediaDoc = InferSchemaType<typeof MediaSchema> & { _id: mongoose.Types.ObjectId }

const Media = (models.Media as Model<MediaDoc>) || model<MediaDoc>('Media', MediaSchema)

export default Media
