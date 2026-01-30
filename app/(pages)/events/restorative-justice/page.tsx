import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, BookOpen, Heart, Target, MessageCircle, Award, GraduationCap, Globe } from 'lucide-react'
import Link from 'next/link'

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
            Back to Events
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                REPORT
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Single Credit Course on "Restorative Practice and Justice: Theory and Tools for Building Compassionate Communities"
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                National Law University Odisha
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span>15-30 November 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span>16 Hours</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>NLUO & Online</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span>54 Participants</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                Recognizing the growing relevance of restorative approaches in justice and community-building, the <strong>NLUO Centre for Mediation and Negotiation (NLUO CMN)</strong>, in collaboration with <strong>Accords International (AcIn)</strong>, successfully conducted a Single Credit Course titled "Restorative Practice and Justice: Theory and Tools for Building Compassionate Communities". The course was delivered in a <strong>sixteen-hour format</strong> over multiple sessions, from <strong>15th November to 30th November, 2025</strong>, and was designed with the goal of imparting both theoretical knowledge and practical skills relating to restorative processes, conflict transformation, trauma-informed care, and community-centred approaches to justice.
              </p>
              <p>
                Participants engaged in reflective activities focused on self-care, empathy-building, and cultivating compassionate environments. Artistic and creative exercises further enriched the learning experience, offering alternative pathways for expression and insight. Led by experienced practitioners, the course provided a rigorous yet engaging platform for educators, community leaders, social workers, and others interested in transformative justice.
              </p>
            </div>
          </section>

          {/* Course Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Understanding</h3>
                    <p className="text-gray-600 text-sm">
                      Develop deep knowledge of Restorative Justice and Restorative Practices principles and applications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Active Listening & Communication</h3>
                    <p className="text-gray-600 text-sm">
                      Master active listening skills and nonviolent communication techniques for conflict resolution.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <Users className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Restorative Circles</h3>
                    <p className="text-gray-600 text-sm">
                      Learn to facilitate and participate in restorative circles with practical application skills.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <Heart className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Self-Care & Community Care</h3>
                    <p className="text-gray-600 text-sm">
                      Focus on personal well-being and community care practices for sustainable restorative work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Learning Outcomes</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    1
                  </div>
                  <p className="text-gray-600">
                    Participants developed an understanding of Restorative Justice (RJ) and Restorative Practices (RP).
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                    2
                  </div>
                  <p className="text-gray-600">
                    Participants enhanced their active listening and nonviolent communication skills.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                    3
                  </div>
                  <p className="text-gray-600">
                    Participants were able to differentiate between RJ and adversarial criminal justice systems, understand the limitations of punitive models, and recognize the transformative potential of RJ. They gained insight into healing, rehabilitation, and community involvement, addressing the needs of both the harmed and the harmer.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-4">
                    4
                  </div>
                  <p className="text-gray-600">
                    Participants learned to apply restorative approaches in various contexts, including schools, colleges, and families, equipping them to adapt RJ and RP to diverse environments with their respective challenges and dynamics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Target Group */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Target Group & Methodology</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Participant Profile</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The course was attended by a total of <strong>54 participants</strong>, including students and professionals, representing a wide diversity of universities and locations.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Learning Approach</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Participants learned by doing, engaging in interactive methodologies such as case studies, simulations, and role-playing exercises. The course structure ensured a practical approach, enhancing their ability to apply concepts in real-world scenarios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Course Structure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Structure and Syllabus Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-6">
              <p>
                The structure and delivery of the course were grounded in a well-defined academic framework consisting of four modules:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Module I</h3>
                <p className="text-gray-600 text-sm">
                  Introduction to restorative practices through ice-breakers, core concepts, values, principles, and building a restorative mindset.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Module II</h3>
                <p className="text-gray-600 text-sm">
                  Focus on self-care, emotional healing, circle keeping, and community care practices.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Module III</h3>
                <p className="text-gray-600 text-sm">
                  Examination of restorative justice within the criminal justice system, highlighting distinctions from adversarial approaches, restorative child justice, and challenges in institutional adoption in India.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Module IV</h3>
                <p className="text-gray-600 text-sm">
                  Application of restorative practices to real-life settings such as schools, homes, workplaces, and communities, concluding with a reflective closing circle.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Interactive Teaching Methodology</h3>
              <p className="text-gray-600 mb-4">
                A key feature of this single-credit course was its interactive, participatory teaching methodology. Instead of relying on lectures, the sessions used brainstorming, breakout discussions, case analyses, role plays, restorative circle simulations, and reflection-based activities. Students were encouraged to share experiences, practice active listening, and engage in restorative dialogue.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Google Meet breakout rooms</strong> enabled small-group problem solving, circle facilitation, and emotionally honest conversations based on real scenarios. The diverse backgrounds of participants added depth and vibrancy to the discussions.
              </p>
              <p className="text-gray-600">
                The evaluation system supported this experiential model. Rather than relying solely on written work, assessments included peer feedback on facilitation and listening skills, poem and excerpt analysis, case study analysis, and quizzes, capturing both reflective growth and technical understanding.
              </p>
            </div>
          </section>

          {/* Daily Sessions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Session Breakdown</h2>
            
            <div className="space-y-6">
              {/* Day 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Day 1 - November 15, 2025</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    The first day commenced with an introduction and ice-breaking session, led by <strong>Dr. Akshay Verma</strong>, Assistant Professor of Law at NLUO. Dr. Verma began by orienting the participants to the structure and objectives of the course, providing an overview of the syllabus.
                  </p>
                  <p>
                    <strong>Dr. Akanksha Marwah</strong>, an academician, restorative practitioner and expert in child restorative justice, introduced the foundational concepts of RJ and RP, elaborating on their historical development, core philosophy, and practical significance. The session delved into core concepts including harm, accountability, relationship-building, and community participation.
                  </p>
                  <p>
                    Dr. Marwah facilitated an interactive exercise using the feelings and needs wheel, enabling participants to recognize emotions, identify unmet needs, and understand how these elements contribute to conflict and its resolution.
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Day 2 - November 16, 2025</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    The second day continued the discussion on building restorative minds with <strong>Dr. Akanksha Marwah</strong>, who guided participants through reflective exercises that deepened their understanding of restorative thinking, emotional awareness, and empathetic engagement.
                  </p>
                  <p>
                    <strong>Dr. Sal Corbin</strong>, bringing fifteen years of academic experience and extensive work in community-level conflict transformation, introduced nuanced learning on trauma-informed care, unarmed civilian protection, and active bystander intervention.
                  </p>
                  <p>
                    The discussions covered the importance of self-care, particularly for circle keepers and facilitators, with a focus on grounding techniques and the art of facilitation. Participants engaged in self-care activities and community engagement exercises.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Day 3 - November 22, 2025</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    The third day featured a session by <strong>Jeri Fields</strong>, a restorative justice facilitator from the DC Peace Team, who drew upon her experience in community chaplaincy and circle work to offer compassionate and practical guidance on the art of facilitation.
                  </p>
                  <p>
                    <strong>Upasana Singh</strong>, J.S.D. candidate at Cornell Law School, provided research-based insights into the institutionalization of restorative systems within criminal justice frameworks. She examined the distinctions between Restorative Justice and the adversarial criminal justice model.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Day 4 - November 23, 2025</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Dr. Akanksha Marwah</strong> opened the session and set the tone for the day's discussions. The first half was led by <strong>Theresa Huggins</strong>, who brings over twenty-five years of experience working within juvenile and adult detention settings. She shared valuable perspectives on harm, accountability, resilience, and healing, and elaborated on restorative questions and victim-offender dialogue.
                  </p>
                  <p>
                    Dr. Marwah continued with a focus on restorative child justice, using a book written by a 9-10-year-old girl whose grandfather was incarcerated to illustrate the emotional impact of incarceration on children and families. She discussed the potential for integrating restorative justice principles into the existing criminal justice system in India.
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Day 5 - November 29, 2025</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Dr. Akanksha Marwah</strong> discussed the application of restorative practices in the contemporary world. She explored the role of intersectionality in restorative work, emphasizing how identities and social structures influence experiences of harm, accountability, and healing.
                  </p>
                  <p>
                    The session included group activities in which participants, divided into teams of 4-5, engaged in applying restorative concepts through a restorative action plan and community-based practices. The discussion made use of the wheel of intersectionality and its associated pillars.
                  </p>
                  <p>
                    The session concluded with an examination of restorative practices in schools, highlighting how educational spaces can incorporate restorative approaches to build community, address conflict, and support student well-being.
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-pink-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Day 6 - November 30, 2025</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>
                    On the sixth and final day, <strong>Dr. Akanksha Marwah</strong> led a session on the application of restorative practices within the home and workplace. The day included a quiz comprising multiple-choice and short-answer questions to assess participants' understanding of the concepts covered throughout the course.
                  </p>
                  <p>
                    Participants engaged in mental exercises aimed at converting judgments into observations, an essential skill for developing restorative communication. Templates for crafting compassionate sentences were introduced to help participants practice empathetic and non-violent expression.
                  </p>
                  <p>
                    The course concluded with a <strong>Final Reflection Circle</strong>, where participants shared insights, personal learnings, and reflections on their restorative journey, marking a thoughtful end to the six-day programme.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Faculty */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Faculty & Facilitators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">AV</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Dr. Akshay Verma</h3>
                <p className="text-gray-600 text-sm text-center mb-2">Assistant Professor of Law, NLUO</p>
                <p className="text-gray-500 text-xs text-center">Course Introduction & Orientation</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">AM</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Dr. Akanksha Marwah</h3>
                <p className="text-gray-600 text-sm text-center mb-2">Restorative Practitioner & Expert</p>
                <p className="text-gray-500 text-xs text-center">Child Restorative Justice Specialist</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">SC</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Dr. Sal Corbin</h3>
                <p className="text-gray-600 text-sm text-center mb-2">Conflict Transformation Expert</p>
                <p className="text-gray-500 text-xs text-center">15 Years Academic Experience</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">JF</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Jeri Fields</h3>
                <p className="text-gray-600 text-sm text-center mb-2">DC Peace Team</p>
                <p className="text-gray-500 text-xs text-center">Community Chaplain & Circle Facilitator</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-lg">US</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Upasana Singh</h3>
                <p className="text-gray-600 text-sm text-center mb-2">J.S.D. Candidate</p>
                <p className="text-gray-500 text-xs text-center">Cornell Law School</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-lg">TH</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Theresa Huggins</h3>
                <p className="text-gray-600 text-sm text-center mb-2">Juvenile Justice Expert</p>
                <p className="text-gray-500 text-xs text-center">25+ Years Detention Experience</p>
              </div>
            </div>
          </section>

          {/* Participants' Feedback */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Participants' Feedback</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Overwhelmingly Positive Response</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>
                  Participants shared very positive feedback, noting that the interactive format strengthened their understanding of restorative concepts. They appreciated learning to shift from judgmental reactions to compassionate communication using observations, feelings, needs, and requests.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                  Key Learnings
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
                  Suggestions for Improvement
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-6">
                <p>
                  Overall, the Single Credit Course on <em>Restorative Practice and Justice: Theory and Tools for Building Compassionate Communities</em> successfully created an intellectually and emotionally enriching academic environment. It enabled participants to critically understand the limitations of punitive systems, appreciate the value of harm-healing approaches, and explore restorative tools applicable to diverse social and professional settings.
                </p>
                <p>
                  The course strengthened cross-institutional collaboration, global academic exposure, and practical engagement with transformative justice, marking a significant step forward in promoting restorative approaches within the Indian legal and educational landscape.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Global Collaboration</h4>
                  <p className="text-gray-600 text-sm">International faculty and diverse perspectives</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Practical Engagement</h4>
                  <p className="text-gray-600 text-sm">Hands-on learning with real scenarios</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center">
                  <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Transformative Impact</h4>
                  <p className="text-gray-600 text-sm">Building compassionate communities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Organizing Institutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Organizing Institutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2 text-center">NLUO Centre for Mediation and Negotiation</h3>
                <p className="text-gray-600 text-sm text-center">National Law University Odisha</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Accords International</h3>
                <p className="text-gray-600 text-sm text-center">Collaborative Partner (AcIn)</p>
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
              Back to All Events
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}