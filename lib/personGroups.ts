/**
 * Client-safe person vocabulary. Kept out of the model so a browser
 * component can import it without pulling in mongoose.
 */
export const PERSON_GROUPS = [
  'editorial-board',
  'guest-editor',
  'student-editor',
  'blog-admin',
  'advisory-board',
  'faculty',
] as const

export type PersonGroup = (typeof PERSON_GROUPS)[number]

export const GROUP_LABELS: Record<PersonGroup, string> = {
  'editorial-board': 'Advisory Editorial Board',
  'guest-editor': 'Guest Editor',
  'student-editor': 'Student Editor',
  'blog-admin': 'Blog Administrator',
  'advisory-board': 'Advisory Board',
  faculty: 'Faculty Advisor',
}

/** Which fields each group's editor form should show. */
export const GROUP_FIELDS: Record<PersonGroup, string[]> = {
  'editorial-board': ['position', 'organization', 'linkedin'],
  'guest-editor': ['position', 'organization', 'linkedin'],
  'student-editor': ['position', 'linkedin'],
  'blog-admin': ['position', 'organization', 'linkedin'],
  'advisory-board': ['position', 'organization', 'location', 'tags', 'bio', 'linkedin'],
  faculty: ['position', 'organization', 'tags', 'qualifications', 'experience', 'bio', 'email', 'phone', 'linkedin'],
}

export interface PersonView {
  id: string
  name: string
  position: string
  organization: string
  location: string
  bio: string
  image: string
  linkedin: string
  email: string
  phone: string
  tags: string[]
  qualifications: string[]
  experience: string
  group: PersonGroup
  order: number
}

/** Empty grouping, used as the fallback when the database is unreachable. */
export const EMPTY_PEOPLE: Record<PersonGroup, PersonView[]> = {
  'editorial-board': [],
  'guest-editor': [],
  'student-editor': [],
  'blog-admin': [],
  'advisory-board': [],
  faculty: [],
}
