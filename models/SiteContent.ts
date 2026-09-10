import mongoose, { Schema, model, models, type Model, type InferSchemaType } from 'mongoose'

/**
 * An override for one editable slot on the site.
 *
 * Defaults always live in the code — a row here only exists once an admin has
 * changed something. Deleting the row restores the original wording, which is
 * what "Reset to original" does.
 */
const SiteContentSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, trim: true, maxlength: 160 },
    type: { type: String, required: true, enum: ['text', 'image'], default: 'text' },
    value: { type: String, required: true, maxlength: 20000 },
    /** Alt text for image slots; ignored for text. */
    alt: { type: String, default: '', maxlength: 300 },
    page: { type: String, default: '', maxlength: 160 },
    updatedBy: { type: String, default: 'admin', maxlength: 90 },
  },
  { timestamps: true }
)

export type SiteContentDoc = InferSchemaType<typeof SiteContentSchema> & {
  _id: mongoose.Types.ObjectId
}

const SiteContent =
  (models.SiteContent as Model<SiteContentDoc>) ||
  model<SiteContentDoc>('SiteContent', SiteContentSchema)

export default SiteContent
