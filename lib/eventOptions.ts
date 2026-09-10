/**
 * Client-safe event vocabulary.
 *
 * Kept out of models/Event.ts so importing it from a browser component does
 * not drag mongoose into the client bundle.
 */
export const EVENT_CATEGORIES = [
  'Conclave',
  'Conference',
  'Course',
  'Workshop',
  'Outreach',
  'Competition',
  'Inauguration',
  'Seminar',
  'Other',
] as const

export type EventCategory = (typeof EVENT_CATEGORIES)[number]
