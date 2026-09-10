import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EventsClient from '@/components/events/EventsClient'
import Editable from '@/components/editable/Editable'
import EditableImage from '@/components/editable/EditableImage'
import { listEvents, type EventView } from '@/lib/events'
import { DatabaseZap } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Events | NLUO Mediation Blogs',
  description:
    'Workshops, conclaves, courses and outreach programmes run by the NLUO Centre for Mediation and Negotiation.',
}

export default async function EventsPage() {
  let upcoming: EventView[] = []
  let past: EventView[] = []
  let dbError = false

  try {
    const result = await listEvents()
    upcoming = result.upcoming
    past = result.past
  } catch (error) {
    console.error('[events:list]', error)
    dbError = true
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              <Editable id="events.page.title" as="span" label="Events page title">
                Mediation &amp; Negotiation
              </Editable>{' '}
              <span className="text-blue-600">
                <Editable id="events.page.title-accent" as="span" label="Events title (blue word)">
                  Events
                </Editable>
              </span>
            </h1>
            <Editable
              id="events.page.intro"
              as="p"
              multiline
              label="Events page introduction"
              className="mx-auto max-w-4xl text-xl text-gray-600"
            >
              Join us for insightful discussions, workshops, and conferences featuring leading experts in mediation and
              negotiation. Stay updated with the latest developments and network with professionals in the field.
            </Editable>
          </div>

          {/* Featured banner */}
          <div className="mb-16">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-xl">
              <EditableImage
                id="events.featured.image"
                src="/events/event2.jpeg"
                alt="GAJE-NLUO Mediation Conclave"
                label="Events featured banner"
                className="h-80 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-900/70 via-transparent to-indigo-900/70">
                <div className="absolute bottom-8 left-8 text-white">
                  <Editable
                    id="events.featured.title"
                    as="h3"
                    label="Featured banner title"
                    className="pointer-events-auto mb-2 text-2xl font-bold"
                  >
                    GAJE-NLUO Mediation Conclave
                  </Editable>
                  <Editable
                    id="events.featured.caption"
                    as="p"
                    label="Featured banner caption"
                    className="pointer-events-auto text-blue-100"
                  >
                    Our flagship international event bringing together global ADR experts
                  </Editable>
                </div>
              </div>
            </div>
          </div>

          {dbError ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <DatabaseZap className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <h2 className="font-bold text-amber-900"><Editable id="events.events-are-temporarily-unavailable" as="span">Events are temporarily unavailable</Editable></h2>
                  <p className="mt-1 text-sm text-amber-800">
                    <Editable id="events.we-could-not-reach-the-database-please-refresh-i" as="span">We could not reach the database. Please refresh in a moment.</Editable>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <EventsClient upcoming={upcoming} past={past} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
