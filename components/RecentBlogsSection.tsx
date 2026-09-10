import Link from 'next/link'
import { ArrowRight, PenLine, Star } from 'lucide-react'
import ArticleCard from '@/components/ArticleCard'
import NewArticleButton from '@/components/blog/NewArticleButton'
import { listPublishedArticles } from '@/lib/articleService'
import type { Article } from '@/lib/articles'
import Editable from '@/components/editable/Editable'

export default async function RecentBlogsSection() {
  let articles: Article[] = []
  let unavailable = false

  try {
    const result = await listPublishedArticles({ limit: 6 })
    articles = result.articles
  } catch (error) {
    console.error('[home:recent]', error)
    unavailable = true
  }

  const featured = articles.find((a) => a.featured)
  const rest = featured ? articles.filter((a) => a.id !== featured.id) : articles

  return (
    <section className="relative bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-500/5 blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Star className="mr-2 h-4 w-4" />
            <Editable id="cmp.recentblogssection.latest-articles" as="span">Latest Articles</Editable>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            <Editable id="cmp.recentblogssection.recent" as="span">Recent</Editable>{' '}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              <Editable id="cmp.recentblogssection.insights" as="span">Insights</Editable>
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            <Editable id="cmp.recentblogssection.explore-cutting-edge-research-expert-analysis-an" as="span">Explore cutting-edge research, expert analysis, and practical insights in mediation and alternative dispute resolution.</Editable>
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.length > 0 ? (
            <>
              {featured && <ArticleCard article={featured} featured />}
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white/70 px-8 py-16 text-center backdrop-blur-sm">
              <span className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm">
                <PenLine className="h-7 w-7" />
              </span>
              <p className="mb-2 text-2xl font-semibold text-gray-800">
                {unavailable ? (
                  <Editable id="home.recent.empty-title-error" as="span" label="Recent Insights: database error title">
                    Articles are momentarily unavailable
                  </Editable>
                ) : (
                  <Editable id="home.recent.empty-title" as="span" label="Recent Insights: empty title">
                    No articles published yet
                  </Editable>
                )}
              </p>
              <p className="max-w-md text-gray-500">
                {unavailable ? (
                  <Editable id="home.recent.empty-body-error" as="span" multiline label="Recent Insights: database error text">
                    We could not reach the article database. Please refresh in a moment.
                  </Editable>
                ) : (
                  <Editable id="home.recent.empty-body" as="span" multiline label="Recent Insights: empty text">
                    Published pieces appear here as soon as they go live. Yours could be the first.
                  </Editable>
                )}
              </p>
              {!unavailable && (
                <div className="mt-7">
                  <NewArticleButton label="Write the first article" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 origin-left scale-x-0 bg-blue-700 transition-transform duration-300 group-hover:scale-x-100"></div>
              <span className="relative flex items-center">
                <Editable id="cmp.recentblogssection.view-all-articles" as="span">View All Articles</Editable>
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <NewArticleButton />
          </div>
        </div>
      </div>
    </section>
  )
}
