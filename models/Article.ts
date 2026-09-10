import mongoose, { Schema, model, models, type Model, type InferSchemaType } from 'mongoose'
import { ARTICLE_CATEGORIES, SUBMISSION_TYPES } from '@/lib/articles'

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 90 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    affiliation: { type: String, trim: true, maxlength: 140, default: '' },
    linkedin: { type: String, trim: true, maxlength: 250, default: '' },
    bio: { type: String, trim: true, maxlength: 400, default: '' },
  },
  { _id: false }
)

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 10, maxlength: 200 },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true, trim: true, minlength: 60, maxlength: 400 },
    content: { type: String, required: true },
    category: { type: String, required: true, enum: ARTICLE_CATEGORIES, index: true },
    submissionType: { type: String, enum: SUBMISSION_TYPES, default: 'Article' },
    tags: {
      type: [String],
      default: [],
      validate: [(v: string[]) => v.length <= 6, 'At most 6 keywords are allowed'],
    },

    // House style allows a maximum of two authors per piece.
    author: { type: AuthorSchema, required: true },
    coAuthor: { type: AuthorSchema, default: null },

    coverImage: { type: String, default: '' },
    coverImageAlt: { type: String, trim: true, maxlength: 160, default: '' },
    coverImageCredit: { type: String, trim: true, maxlength: 160, default: '' },

    readTime: { type: Number, default: 5 },
    wordCount: { type: Number, default: 0 },

    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    views: { type: Number, default: 0 },

    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

ArticleSchema.index({ publishedAt: -1 })
ArticleSchema.index({ title: 'text', excerpt: 'text', tags: 'text' })

export type ArticleDoc = InferSchemaType<typeof ArticleSchema> & { _id: mongoose.Types.ObjectId }

const Article = (models.Article as Model<ArticleDoc>) || model<ArticleDoc>('Article', ArticleSchema)

export default Article
