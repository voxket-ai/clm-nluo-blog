import Link from 'next/link'
import { ArrowRight, Clock, Star, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type Article, categoryColor, formatArticleDate, initials } from '@/lib/articles'
import ArticleAdminControls from '@/components/blog/ArticleAdminControls'
import Editable from '@/components/editable/Editable'

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const href = `/blog/${article.slug}`
  const byline = article.coAuthor
    ? `${article.author.name} & ${article.coAuthor.name}`
    : article.author.name

  return (
    <article
      className={cn(
        'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200',
        'transform hover:-translate-y-2 hover:scale-[1.02]',
        featured && 'md:col-span-2 lg:col-span-2'
      )}
    >
      <ArticleAdminControls article={article} />

      {/* Image Section */}
      <div className={cn('relative overflow-hidden', featured ? 'h-64 md:h-80' : 'h-56')}>
        {article.coverImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={article.coverImage}
            alt={article.coverImageAlt || article.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600">
            <span className="absolute inset-0 flex items-center justify-center text-white/25 text-6xl font-black tracking-tighter">
              {initials(article.author.name)}
            </span>
          </div>
        )}

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-purple-900/20 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm',
              categoryColor(article.category)
            )}
          >
            {article.category}
          </span>
          {article.featured && (
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold flex items-center shadow-sm">
              <Star className="w-3 h-3 mr-1" />
              <Editable id="cmp.articlecard.featured" as="span">Featured</Editable>
            </span>
          )}
          {article.trending && (
            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold shadow-sm">
              <Editable id="cmp.articlecard.trending" as="span">Trending</Editable>
            </span>
          )}
        </div>

        {/* Byline overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-sm text-white/85">
            <User className="w-4 h-4 mr-2 shrink-0" />
            <span className="truncate">{byline}</span>
            {formatArticleDate(article.publishedAt) && (
              <>
                <span className="mx-2">•</span>
                <span className="shrink-0">{formatArticleDate(article.publishedAt)}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          <span>{article.readTime} min read</span>
          <span className="mx-2 text-gray-300">•</span>
          <span>{article.submissionType}</span>
        </div>

        <h3
          className={cn(
            'font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2',
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          )}
        >
          <Link href={href} className="hover:underline">
            {article.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>

        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group/link"
          >
            <Editable id="cmp.articlecard.read-more" as="span">Read More</Editable>
            <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>

          {article.tags.length > 0 && (
            <span className="text-xs text-gray-400 truncate max-w-[45%] text-right">
              #{article.tags.slice(0, 2).join('  #')}
            </span>
          )}
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
    </article>
  )
}
