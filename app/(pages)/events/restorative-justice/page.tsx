import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, BookOpen, Heart, Target, MessageCircle, Award, GraduationCap, Globe } from 'lucide-react'
import Link from 'next/link'
import Editable from '@/components/editable/Editable'

export default function RestorativeJusticeCourse() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/events" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <Editable id="events.restorative-justice.back-to-events" as="span">Back to Events</Editable>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Editable id="events.restorative-justice.report" as="span">REPORT</Editable>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <Editable id="events.restorative-justice.single-credit-course-on-restorative-practice-and" as="span">Single Credit Course on "Restorative Practice and Justice: Theory and Tools for Building Compassionate Communities"</Editable>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                <Editable id="events.restorative-justice.national-law-university-odisha" as="span">National Law University Odisha</Editable>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.restorative-justice.15-30-november-2025" as="span">15-30 November 2025</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.restorative-justice.16-hours" as="span">16 Hours</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.restorative-justice.nluo-online" as="span">NLUO & Online</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.restorative-justice.54-participants" as="span">54 Participants</Editable></span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.introduction" as="span">Introduction</Editable></h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                <Editable id="events.restorative-justice.recognizing-the-growing-relevance-of-restorative" as="span">Recognizing the growing relevance of restorative approaches in justice and community-building, the</Editable> <strong><Editable id="events.restorative-justice.nluo-centre-for-mediation-and-negotiation-nluo-c" as="span">NLUO Centre for Mediation and Negotiation (NLUO CMN)</Editable></strong>, in collaboration with <strong><Editable id="events.restorative-justice.accords-international-acin" as="span">Accords International (AcIn)</Editable></strong>, successfully conducted a Single Credit Course titled "Restorative Practice and Justice: Theory and Tools for Building Compassionate Communities". The course was delivered in a <strong><Editable id="events.restorative-justice.sixteen-hour-format" as="span">sixteen-hour format</Editable></strong> <Editable id="events.restorative-justice.over-multiple-sessions-from" as="span">over multiple sessions, from</Editable> <strong><Editable id="events.restorative-justice.15th-november-to-30th-november-2025" as="span">15th November to 30th November, 2025</Editable></strong>, and was designed with the goal of imparting both theoretical knowledge and practical skills relating to restorative processes, conflict transformation, trauma-informed care, and community-centred approaches to justice.
              </p>
              <p>
                <Editable id="events.restorative-justice.participants-engaged-in-reflective-activities-fo" as="span">Participants engaged in reflective activities focused on self-care, empathy-building, and cultivating compassionate environments. Artistic and creative exercises further enriched the learning experience, offering alternative pathways for expression and insight. Led by experienced practitioners, the course provided a rigorous yet engaging platform for educators, community leaders, social workers, and others interested in transformative justice.</Editable>
              </p>
            </div>
          </section>

          {/* Course Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.course-objectives" as="span">Course Objectives</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2"><Editable id="events.restorative-justice.comprehensive-understanding" as="span">Comprehensive Understanding</Editable></h3>
                    <p className="text-gray-600 text-sm">
                      <Editable id="events.restorative-justice.develop-deep-knowledge-of-restorative-justice-an" as="span">Develop deep knowledge of Restorative Justice and Restorative Practices principles and applications.</Editable>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2"><Editable id="events.restorative-justice.active-listening-communication" as="span">Active Listening & Communication</Editable></h3>
                    <p className="text-gray-600 text-sm">
                      <Editable id="events.restorative-justice.master-active-listening-skills-and-nonviolent-co" as="span">Master active listening skills and nonviolent communication techniques for conflict resolution.</Editable>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <Users className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2"><Editable id="events.restorative-justice.restorative-circles" as="span">Restorative Circles</Editable></h3>
                    <p className="text-gray-600 text-sm">
                      <Editable id="events.restorative-justice.learn-to-facilitate-and-participate-in-restorati" as="span">Learn to facilitate and participate in restorative circles with practical application skills.</Editable>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <Heart className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2"><Editable id="events.restorative-justice.self-care-community-care" as="span">Self-Care & Community Care</Editable></h3>
                    <p className="text-gray-600 text-sm">
                      <Editable id="events.restorative-justice.focus-on-personal-well-being-and-community-care" as="span">Focus on personal well-being and community care practices for sustainable restorative work.</Editable>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.course-learning-outcomes" as="span">Course Learning Outcomes</Editable></h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    1
                  </div>
                  <p className="text-gray-600">
                    <Editable id="events.restorative-justice.participants-developed-an-understanding-of-resto" as="span">Participants developed an understanding of Restorative Justice (RJ) and Restorative Practices (RP).</Editable>
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                    2
                  </div>
                  <p className="text-gray-600">
                    <Editable id="events.restorative-justice.participants-enhanced-their-active-listening-and" as="span">Participants enhanced their active listening and nonviolent communication skills.</Editable>
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                    3
                  </div>
                  <p className="text-gray-600">
                    <Editable id="events.restorative-justice.participants-were-able-to-differentiate-between" as="span">Participants were able to differentiate between RJ and adversarial criminal justice systems, understand the limitations of punitive models, and recognize the transformative potential of RJ. They gained insight into healing, rehabilitation, and community involvement, addressing the needs of both the harmed and the harmer.</Editable>
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-4">
                    4
                  </div>
                  <p className="text-gray-600">
                    <Editable id="events.restorative-justice.participants-learned-to-apply-restorative-approa" as="span">Participants learned to apply restorative approaches in various contexts, including schools, colleges, and families, equipping them to adapt RJ and RP to diverse environments with their respective challenges and dynamics.</Editable>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Target Group */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.target-group-methodology" as="span">Target Group & Methodology</Editable></h2>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.participant-profile" as="span">Participant Profile</Editable></h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <Editable id="events.restorative-justice.the-course-was-attended-by-a-total-of" as="span">The course was attended by a total of</Editable> <strong><Editable id="events.restorative-justice.54-participants-2" as="span">54 participants</Editable></strong>, including students and professionals, representing a wide diversity of universities and locations.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.learning-approach" as="span">Learning Approach</Editable></h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <Editable id="events.restorative-justice.participants-learned-by-doing-engaging-in-intera" as="span">Participants learned by doing, engaging in interactive methodologies such as case studies, simulations, and role-playing exercises. The course structure ensured a practical approach, enhancing their ability to apply concepts in real-world scenarios.</Editable>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Course Structure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.course-structure-and-syllabus-overview" as="span">Course Structure and Syllabus Overview</Editable></h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-6">
              <p>
                <Editable id="events.restorative-justice.the-structure-and-delivery-of-the-course-were-gr" as="span">The structure and delivery of the course were grounded in a well-defined academic framework consisting of four modules:</Editable>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.restorative-justice.module-i" as="span">Module I</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="events.restorative-justice.introduction-to-restorative-practices-through-ic" as="span">Introduction to restorative practices through ice-breakers, core concepts, values, principles, and building a restorative mindset.</Editable>
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.restorative-justice.module-ii" as="span">Module II</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="events.restorative-justice.focus-on-self-care-emotional-healing-circle-keep" as="span">Focus on self-care, emotional healing, circle keeping, and community care practices.</Editable>
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.restorative-justice.module-iii" as="span">Module III</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="events.restorative-justice.examination-of-restorative-justice-within-the-cr" as="span">Examination of restorative justice within the criminal justice system, highlighting distinctions from adversarial approaches, restorative child justice, and challenges in institutional adoption in India.</Editable>
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.restorative-justice.module-iv" as="span">Module IV</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="events.restorative-justice.application-of-restorative-practices-to-real-lif" as="span">Application of restorative practices to real-life settings such as schools, homes, workplaces, and communities, concluding with a reflective closing circle.</Editable>
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.restorative-justice.interactive-teaching-methodology" as="span">Interactive Teaching Methodology</Editable></h3>
              <p className="text-gray-600 mb-4">
                <Editable id="events.restorative-justice.a-key-feature-of-this-single-credit-course-was-i" as="span">A key feature of this single-credit course was its interactive, participatory teaching methodology. Instead of relying on lectures, the sessions used brainstorming, breakout discussions, case analyses, role plays, restorative circle simulations, and reflection-based activities. Students were encouraged to share experiences, practice active listening, and engage in restorative dialogue.</Editable>
              </p>
              <p className="text-gray-600 mb-4">
                <strong><Editable id="events.restorative-justice.google-meet-breakout-rooms" as="span">Google Meet breakout rooms</Editable></strong> <Editable id="events.restorative-justice.enabled-small-group-problem-solving-circle-facil" as="span">enabled small-group problem solving, circle facilitation, and emotionally honest conversations based on real scenarios. The diverse backgrounds of participants added depth and vibrancy to the discussions.</Editable>
              </p>
              <p className="text-gray-600">
                <Editable id="events.restorative-justice.the-evaluation-system-supported-this-experientia" as="span">The evaluation system supported this experiential model. Rather than relying solely on written work, assessments included peer feedback on facilitation and listening skills, poem and excerpt analysis, case study analysis, and quizzes, capturing both reflective growth and technical understanding.</Editable>
              </p>
            </div>
          </section>

          {/* Daily Sessions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.daily-session-breakdown" as="span">Daily Session Breakdown</Editable></h2>
            
            <div className="space-y-6">
              {/* Day 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.day-1-november-15-2025" as="span">Day 1 - November 15, 2025</Editable></h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <Editable id="events.restorative-justice.the-first-day-commenced-with-an-introduction-and" as="span">The first day commenced with an introduction and ice-breaking session, led by</Editable> <strong><Editable id="events.restorative-justice.dr-akshay-verma" as="span">Dr. Akshay Verma</Editable></strong>, Assistant Professor of Law at NLUO. Dr. Verma began by orienting the participants to the structure and objectives of the course, providing an overview of the syllabus.
                  </p>
                  <p>
                    <strong><Editable id="events.restorative-justice.dr-akanksha-marwah" as="span">Dr. Akanksha Marwah</Editable></strong>, an academician, restorative practitioner and expert in child restorative justice, introduced the foundational concepts of RJ and RP, elaborating on their historical development, core philosophy, and practical significance. The session delved into core concepts including harm, accountability, relationship-building, and community participation.
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.dr-marwah-facilitated-an-interactive-exercise-us" as="span">Dr. Marwah facilitated an interactive exercise using the feelings and needs wheel, enabling participants to recognize emotions, identify unmet needs, and understand how these elements contribute to conflict and its resolution.</Editable>
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.day-2-november-16-2025" as="span">Day 2 - November 16, 2025</Editable></h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <Editable id="events.restorative-justice.the-second-day-continued-the-discussion-on-build" as="span">The second day continued the discussion on building restorative minds with</Editable> <strong><Editable id="events.restorative-justice.dr-akanksha-marwah-2" as="span">Dr. Akanksha Marwah</Editable></strong>, who guided participants through reflective exercises that deepened their understanding of restorative thinking, emotional awareness, and empathetic engagement.
                  </p>
                  <p>
                    <strong><Editable id="events.restorative-justice.dr-sal-corbin" as="span">Dr. Sal Corbin</Editable></strong>, bringing fifteen years of academic experience and extensive work in community-level conflict transformation, introduced nuanced learning on trauma-informed care, unarmed civilian protection, and active bystander intervention.
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.the-discussions-covered-the-importance-of-self-c" as="span">The discussions covered the importance of self-care, particularly for circle keepers and facilitators, with a focus on grounding techniques and the art of facilitation. Participants engaged in self-care activities and community engagement exercises.</Editable>
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.day-3-november-22-2025" as="span">Day 3 - November 22, 2025</Editable></h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <Editable id="events.restorative-justice.the-third-day-featured-a-session-by" as="span">The third day featured a session by</Editable> <strong><Editable id="events.restorative-justice.jeri-fields" as="span">Jeri Fields</Editable></strong>, a restorative justice facilitator from the DC Peace Team, who drew upon her experience in community chaplaincy and circle work to offer compassionate and practical guidance on the art of facilitation.
                  </p>
                  <p>
                    <strong><Editable id="events.restorative-justice.upasana-singh" as="span">Upasana Singh</Editable></strong>, J.S.D. candidate at Cornell Law School, provided research-based insights into the institutionalization of restorative systems within criminal justice frameworks. She examined the distinctions between Restorative Justice and the adversarial criminal justice model.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.day-4-november-23-2025" as="span">Day 4 - November 23, 2025</Editable></h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong><Editable id="events.restorative-justice.dr-akanksha-marwah-3" as="span">Dr. Akanksha Marwah</Editable></strong> <Editable id="events.restorative-justice.opened-the-session-and-set-the-tone-for-the-day" as="span">opened the session and set the tone for the day's discussions. The first half was led by</Editable> <strong><Editable id="events.restorative-justice.theresa-huggins" as="span">Theresa Huggins</Editable></strong>, who brings over twenty-five years of experience working within juvenile and adult detention settings. She shared valuable perspectives on harm, accountability, resilience, and healing, and elaborated on restorative questions and victim-offender dialogue.
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.dr-marwah-continued-with-a-focus-on-restorative" as="span">Dr. Marwah continued with a focus on restorative child justice, using a book written by a 9-10-year-old girl whose grandfather was incarcerated to illustrate the emotional impact of incarceration on children and families. She discussed the potential for integrating restorative justice principles into the existing criminal justice system in India.</Editable>
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.day-5-november-29-2025" as="span">Day 5 - November 29, 2025</Editable></h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong><Editable id="events.restorative-justice.dr-akanksha-marwah-4" as="span">Dr. Akanksha Marwah</Editable></strong> <Editable id="events.restorative-justice.discussed-the-application-of-restorative-practic" as="span">discussed the application of restorative practices in the contemporary world. She explored the role of intersectionality in restorative work, emphasizing how identities and social structures influence experiences of harm, accountability, and healing.</Editable>
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.the-session-included-group-activities-in-which-p" as="span">The session included group activities in which participants, divided into teams of 4-5, engaged in applying restorative concepts through a restorative action plan and community-based practices. The discussion made use of the wheel of intersectionality and its associated pillars.</Editable>
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.the-session-concluded-with-an-examination-of-res" as="span">The session concluded with an examination of restorative practices in schools, highlighting how educational spaces can incorporate restorative approaches to build community, address conflict, and support student well-being.</Editable>
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-pink-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.restorative-justice.day-6-november-30-2025" as="span">Day 6 - November 30, 2025</Editable></h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <Editable id="events.restorative-justice.on-the-sixth-and-final-day" as="span">On the sixth and final day,</Editable> <strong><Editable id="events.restorative-justice.dr-akanksha-marwah-5" as="span">Dr. Akanksha Marwah</Editable></strong> <Editable id="events.restorative-justice.led-a-session-on-the-application-of-restorative" as="span">led a session on the application of restorative practices within the home and workplace. The day included a quiz comprising multiple-choice and short-answer questions to assess participants' understanding of the concepts covered throughout the course.</Editable>
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.participants-engaged-in-mental-exercises-aimed-a" as="span">Participants engaged in mental exercises aimed at converting judgments into observations, an essential skill for developing restorative communication. Templates for crafting compassionate sentences were introduced to help participants practice empathetic and non-violent expression.</Editable>
                  </p>
                  <p>
                    <Editable id="events.restorative-justice.the-course-concluded-with-a" as="span">The course concluded with a</Editable> <strong><Editable id="events.restorative-justice.final-reflection-circle" as="span">Final Reflection Circle</Editable></strong>, where participants shared insights, personal learnings, and reflections on their restorative journey, marking a thoughtful end to the six-day programme.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Faculty */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.expert-faculty-facilitators" as="span">Expert Faculty & Facilitators</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg"><Editable id="events.restorative-justice.av" as="span">AV</Editable></span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2"><Editable id="events.restorative-justice.dr-akshay-verma-2" as="span">Dr. Akshay Verma</Editable></h3>
                <p className="text-gray-600 text-sm text-center mb-2"><Editable id="events.restorative-justice.assistant-professor-of-law-nluo" as="span">Assistant Professor of Law, NLUO</Editable></p>
                <p className="text-gray-500 text-xs text-center"><Editable id="events.restorative-justice.course-introduction-orientation" as="span">Course Introduction & Orientation</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg"><Editable id="events.restorative-justice.am" as="span">AM</Editable></span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2"><Editable id="events.restorative-justice.dr-akanksha-marwah-6" as="span">Dr. Akanksha Marwah</Editable></h3>
                <p className="text-gray-600 text-sm text-center mb-2"><Editable id="events.restorative-justice.restorative-practitioner-expert" as="span">Restorative Practitioner & Expert</Editable></p>
                <p className="text-gray-500 text-xs text-center"><Editable id="events.restorative-justice.child-restorative-justice-specialist" as="span">Child Restorative Justice Specialist</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg"><Editable id="events.restorative-justice.sc" as="span">SC</Editable></span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2"><Editable id="events.restorative-justice.dr-sal-corbin-2" as="span">Dr. Sal Corbin</Editable></h3>
                <p className="text-gray-600 text-sm text-center mb-2"><Editable id="events.restorative-justice.conflict-transformation-expert" as="span">Conflict Transformation Expert</Editable></p>
                <p className="text-gray-500 text-xs text-center"><Editable id="events.restorative-justice.15-years-academic-experience" as="span">15 Years Academic Experience</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg"><Editable id="events.restorative-justice.jf" as="span">JF</Editable></span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2"><Editable id="events.restorative-justice.jeri-fields-2" as="span">Jeri Fields</Editable></h3>
                <p className="text-gray-600 text-sm text-center mb-2"><Editable id="events.restorative-justice.dc-peace-team" as="span">DC Peace Team</Editable></p>
                <p className="text-gray-500 text-xs text-center"><Editable id="events.restorative-justice.community-chaplain-circle-facilitator" as="span">Community Chaplain & Circle Facilitator</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-lg"><Editable id="events.restorative-justice.us" as="span">US</Editable></span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2"><Editable id="events.restorative-justice.upasana-singh-2" as="span">Upasana Singh</Editable></h3>
                <p className="text-gray-600 text-sm text-center mb-2"><Editable id="events.restorative-justice.j-s-d-candidate" as="span">J.S.D. Candidate</Editable></p>
                <p className="text-gray-500 text-xs text-center"><Editable id="events.restorative-justice.cornell-law-school" as="span">Cornell Law School</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-lg"><Editable id="events.restorative-justice.th" as="span">TH</Editable></span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2"><Editable id="events.restorative-justice.theresa-huggins-2" as="span">Theresa Huggins</Editable></h3>
                <p className="text-gray-600 text-sm text-center mb-2"><Editable id="events.restorative-justice.juvenile-justice-expert" as="span">Juvenile Justice Expert</Editable></p>
                <p className="text-gray-500 text-xs text-center"><Editable id="events.restorative-justice.25-years-detention-experience" as="span">25+ Years Detention Experience</Editable></p>
              </div>
            </div>
          </section>

          {/* Participants' Feedback */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.participants-feedback" as="span">Participants' Feedback</Editable></h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.restorative-justice.overwhelmingly-positive-response" as="span">Overwhelmingly Positive Response</Editable></h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>
                  <Editable id="events.restorative-justice.participants-shared-very-positive-feedback-notin" as="span">Participants shared very positive feedback, noting that the interactive format strengthened their understanding of restorative concepts. They appreciated learning to shift from judgmental reactions to compassionate communication using observations, feelings, needs, and requests.</Editable>
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                  <Editable id="events.restorative-justice.key-learnings" as="span">Key Learnings</Editable>
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Clearer perspectives on conflict resolution</li>
                  <li>• Value of transparent conversations</li>
                  <li>• Improved emotional awareness</li>
                  <li>• Calm problem-solving approaches</li>
                  <li>• Deeper respect and accountability</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-orange-600" />
                  <Editable id="events.restorative-justice.suggestions-for-improvement" as="span">Suggestions for Improvement</Editable>
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• More India-specific examples</li>
                  <li>• Closer linkage to legal frameworks</li>
                  <li>• Pre-session study materials</li>
                  <li>• Additional assignments for practice</li>
                  <li>• Longer discussion periods for reflection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.conclusion" as="span">Conclusion</Editable></h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-6">
                <p>
                  <Editable id="events.restorative-justice.overall-the-single-credit-course-on" as="span">Overall, the Single Credit Course on</Editable> <em><Editable id="events.restorative-justice.restorative-practice-and-justice-theory-and-tool" as="span">Restorative Practice and Justice: Theory and Tools for Building Compassionate Communities</Editable></em> <Editable id="events.restorative-justice.successfully-created-an-intellectually-and-emoti" as="span">successfully created an intellectually and emotionally enriching academic environment. It enabled participants to critically understand the limitations of punitive systems, appreciate the value of harm-healing approaches, and explore restorative tools applicable to diverse social and professional settings.</Editable>
                </p>
                <p>
                  <Editable id="events.restorative-justice.the-course-strengthened-cross-institutional-coll" as="span">The course strengthened cross-institutional collaboration, global academic exposure, and practical engagement with transformative justice, marking a significant step forward in promoting restorative approaches within the Indian legal and educational landscape.</Editable>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1"><Editable id="events.restorative-justice.global-collaboration" as="span">Global Collaboration</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="events.restorative-justice.international-faculty-and-diverse-perspectives" as="span">International faculty and diverse perspectives</Editable></p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1"><Editable id="events.restorative-justice.practical-engagement" as="span">Practical Engagement</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="events.restorative-justice.hands-on-learning-with-real-scenarios" as="span">Hands-on learning with real scenarios</Editable></p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center">
                  <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1"><Editable id="events.restorative-justice.transformative-impact" as="span">Transformative Impact</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="events.restorative-justice.building-compassionate-communities" as="span">Building compassionate communities</Editable></p>
                </div>
              </div>
            </div>
          </section>

          {/* Organizing Institutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.restorative-justice.organizing-institutions" as="span">Organizing Institutions</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2 text-center"><Editable id="events.restorative-justice.nluo-centre-for-mediation-and-negotiation" as="span">NLUO Centre for Mediation and Negotiation</Editable></h3>
                <p className="text-gray-600 text-sm text-center"><Editable id="events.restorative-justice.national-law-university-odisha-2" as="span">National Law University Odisha</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2 text-center"><Editable id="events.restorative-justice.accords-international" as="span">Accords International</Editable></h3>
                <p className="text-gray-600 text-sm text-center"><Editable id="events.restorative-justice.collaborative-partner-acin" as="span">Collaborative Partner (AcIn)</Editable></p>
              </div>
            </div>
          </section>

          {/* Back to Events */}
          <div className="text-center">
            <Link 
              href="/events" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <Editable id="events.restorative-justice.back-to-all-events" as="span">Back to All Events</Editable>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}