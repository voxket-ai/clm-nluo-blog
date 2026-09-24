import mongoose, { Schema, model, models, type Model, type InferSchemaType } from 'mongoose'
import { PERSON_GROUPS } from '@/lib/personGroups'

/**
 * Every named individual shown on the site - editorial board, guest editor,
 * student editors, blog administrator, advisory board and faculty advisors.
 *
 * One collection with a `group` discriminator rather than six: the pages
 * differ in how they present a person, not in what a person is.
 */
const PersonSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    position: { type: String, trim: true, default: '', maxlength: 160 },
    organization: { type: String, trim: true, default: '', maxlength: 200 },
    location: { type: String, trim: true, default: '', maxlength: 120 },
    bio: { type: String, trim: true, default: '', maxlength: 2000 },
    image: { type: String, default: '' },
    linkedin: { type: String, trim: true, default: '', maxlength: 400 },
    email: { type: String, trim: true, default: '', maxlength: 160 },
    phone: { type: String, trim: true, default: '', maxlength: 60 },

    /** Expertise on the advisory board, specialisation for faculty. */
    tags: { type: [String], default: [] },
    qualifications: { type: [String], default: [] },
    experience: { type: String, trim: true, default: '', maxlength: 400 },

    group: { type: String, required: true, enum: PERSON_GROUPS, index: true },
    /** Higher sorts first; ties fall back to creation order. */
    order: { type: Number, default: 0 },
    createdBy: { type: String, default: 'admin', maxlength: 90 },
  },
  { timestamps: true }
)

PersonSchema.index({ group: 1, order: -1, createdAt: 1 })

export type PersonDoc = InferSchemaType<typeof PersonSchema> & { _id: mongoose.Types.ObjectId }

const Person = (models.Person as Model<PersonDoc>) || model<PersonDoc>('Person', PersonSchema)

export default Person
