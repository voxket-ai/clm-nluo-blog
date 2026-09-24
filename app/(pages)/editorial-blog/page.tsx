import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Editable from '@/components/editable/Editable'
import PeopleSection from '@/components/people/PeopleSection'
import { listPeople } from '@/lib/people'
import { EMPTY_PEOPLE } from '@/lib/personGroups'
import EditableImage from '@/components/editable/EditableImage'

// Advisory Editorial Board members

// Guest Editor

// Student Editors

// Blog Administrator

export const dynamic = 'force-dynamic'

export default async function EditorialBlogPage() {
  let people = EMPTY_PEOPLE
  try {
    people = await listPeople()
  } catch (error) {
    console.error('[editorial-blog]', error)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="editorial-blog.editorial" as="span">Editorial</Editable> <span className="text-blue-600"><Editable id="editorial-blog.structure" as="span">Structure</Editable></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <Editable id="editorial-blog.meet-our-editorial-team-organized-in-four-distin" as="span">Meet our editorial team organized in four distinct tiers, each playing a crucial role in maintaining the quality and standards of NLUO Mediation Blogs.</Editable>
            </p>
          </div>

          {/* 1. Advisory Editorial Board */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.1-advisory-editorial" as="span">1. Advisory Editorial</Editable> <span className="text-blue-600"><Editable id="editorial-blog.board" as="span">Board</Editable></span>
            </h2>
            <PeopleSection group="editorial-board" people={people['editorial-board']} variant="circle" addLabel="Add board member" />
          </section>

          {/* 2. Guest Editor(s) */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.2-guest" as="span">2. Guest</Editable> <span className="text-blue-600"><Editable id="editorial-blog.editor-s" as="span">Editor(s)</Editable></span>
            </h2>
            <PeopleSection group="guest-editor" people={people['guest-editor']} variant="circle" columns={1} addLabel="Add guest editor" />
          </section>

          {/* 3. Student Editors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.3-student" as="span">3. Student</Editable> <span className="text-blue-600"><Editable id="editorial-blog.editors" as="span">Editors</Editable></span>
            </h2>
            <PeopleSection group="student-editor" people={people['student-editor']} variant="circle" columns={2} addLabel="Add student editor" />
          </section>

          {/* 4. Blog Administrator */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.4-blog" as="span">4. Blog</Editable> <span className="text-blue-600"><Editable id="editorial-blog.administrator" as="span">Administrator</Editable></span>
            </h2>
            <PeopleSection group="blog-admin" people={people['blog-admin']} variant="circle" columns={1} addLabel="Add administrator" />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}