import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Award, Users, Target } from 'lucide-react'
import Editable from '@/components/editable/Editable'
import PeopleSection from '@/components/people/PeopleSection'
import { listGroup } from '@/lib/people'
import type { PersonView } from '@/lib/personGroups'
import EditableImage from '@/components/editable/EditableImage'

// Sample advisory board data


export const dynamic = 'force-dynamic'

export default async function AdvisoryBoardPage() {
  let people: PersonView[] = []
  try {
    people = await listGroup('advisory-board')
  } catch (error) {
    console.error('[advisory-board]', error)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="advisory-board-ccl.advisory" as="span">Advisory</Editable> <span className="text-blue-600"><Editable id="advisory-board-ccl.board" as="span">Board</Editable></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <Editable id="advisory-board-ccl.our-advisory-board-comprises-distinguished-legal" as="span">Our Advisory Board comprises distinguished legal professionals, practitioners, and experts from across the globe who provide strategic guidance and ensure the highest standards of legal scholarship at the Centre for Corporate Law.</Editable>
            </p>
          </div>

     

          {/* Advisory Board Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              <Editable id="advisory-board-ccl.board-2" as="span">Board</Editable> <span className="text-blue-600"><Editable id="advisory-board-ccl.members" as="span">Members</Editable></span>
            </h2>
            <PeopleSection group="advisory-board" people={people} variant="advisory" columns={2} addLabel="Add board member" />
          </section>

          {/* Board Functions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              <Editable id="advisory-board-ccl.board-3" as="span">Board</Editable> <span className="text-blue-600"><Editable id="advisory-board-ccl.functions" as="span">Functions</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="advisory-board-ccl.strategic-guidance" as="span">Strategic Guidance</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="advisory-board-ccl.providing-strategic-direction-for-research-prior" as="span">Providing strategic direction for research priorities, content development, and academic initiatives.</Editable>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="advisory-board-ccl.knowledge-sharing" as="span">Knowledge Sharing</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="advisory-board-ccl.contributing-expertise-through-guest-articles-le" as="span">Contributing expertise through guest articles, lectures, and participation in academic discussions.</Editable>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="advisory-board-ccl.quality-assurance" as="span">Quality Assurance</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="advisory-board-ccl.ensuring-the-highest-standards-of-academic-rigor" as="span">Ensuring the highest standards of academic rigor and practical relevance in all publications.</Editable>
                </p>
              </div>
            </div>
          </section>

     
        </div>
      </main>
      
      <Footer />
    </div>
  )
}