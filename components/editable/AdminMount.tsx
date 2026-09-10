import EditProvider from '@/components/editable/EditProvider'
import AdminBar from '@/components/editable/AdminBar'
import { currentAdmin } from '@/lib/adminSession'
import { getContentMap } from '@/lib/content'

/**
 * Wraps the whole site. Fetches the content overrides once per request and
 * hands them to the client tree, so edited copy is server-rendered — there is
 * no flash of the original wording and search engines see the real text.
 */
export default async function AdminMount({ children }: { children: React.ReactNode }) {
  const [session, content] = await Promise.all([
    currentAdmin().catch(() => null),
    getContentMap(),
  ])

  return (
    <EditProvider isAdmin={Boolean(session)} content={content}>
      {children}
      {session && <AdminBar username={session.username} />}
    </EditProvider>
  )
}
