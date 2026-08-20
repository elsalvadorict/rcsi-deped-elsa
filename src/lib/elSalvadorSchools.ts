/**
 * El Salvador Division — Official School List
 * --------------------------------------------
 * 24 schools (elementary, integrated, and national high school)
 * with their official DepEd School ID numbers.
 *
 * Sourced from the division's master list. Used to populate the
 * school dropdown in the Research Metadata form and as a reference
 * for the Quarterly Survey form.
 */

export interface ElSalvadorSchool {
  id: number;       // Official DepEd School ID (e.g., 127667)
  name: string;     // Full school name (e.g., "Amoros ES")
  level: 'Elementary' | 'Integrated' | 'National High School';
}

export const EL_SALVADOR_SCHOOLS: ElSalvadorSchool[] = [
  // ── Elementary Schools (ES) ──
  { id: 127667, name: 'Amoros ES', level: 'Elementary' },
  { id: 127668, name: 'Bolsingan ES', level: 'Elementary' },
  { id: 127669, name: 'San Francisco de Asis ES (Calongonan ES)', level: 'Elementary' },
  { id: 127670, name: 'Cogon ES', level: 'Elementary' },
  { id: 127671, name: 'El Salvador City CS', level: 'Elementary' },
  { id: 127672, name: 'Himaya ES', level: 'Elementary' },
  { id: 127673, name: 'Hingadaan ES', level: 'Elementary' },
  { id: 127675, name: 'Kibonbon ES', level: 'Elementary' },
  { id: 127676, name: 'Molugan Central School', level: 'Elementary' },
  { id: 127677, name: 'Pedro Sa. Baculo ES (Bolobolo)', level: 'Elementary' },
  { id: 127678, name: 'Sambulawan Elementary School', level: 'Elementary' },
  { id: 127679, name: 'Sinaloc Elementary School', level: 'Elementary' },
  { id: 127680, name: 'Taytay ES', level: 'Elementary' },
  { id: 127681, name: 'Ualiman Elementary School', level: 'Elementary' },
  { id: 137220, name: 'Badiongan Elementary School', level: 'Elementary' },

  // ── National High Schools (NHS) ──
  { id: 304065, name: 'Cogon National High School', level: 'National High School' },
  { id: 304768, name: 'Himaya National High School', level: 'National High School' },
  { id: 304787, name: 'El Salvador City National High School', level: 'National High School' },
  { id: 304797, name: 'Sinaloc National High School', level: 'National High School' },
  { id: 305683, name: 'Sambulawan National High School', level: 'National High School' },
  { id: 315305, name: 'Molugan National High School', level: 'National High School' },
  { id: 315318, name: 'Hingadaan NHS', level: 'National High School' },
  { id: 325701, name: 'San Francisco de Asis National High School', level: 'National High School' },

  // ── Integrated Schools ──
  { id: 501927, name: 'Kalabasibay Integrated School', level: 'Integrated' },
];

/**
 * Look up a school by its official ID.
 */
export function findSchoolById(id: number): ElSalvadorSchool | undefined {
  return EL_SALVADOR_SCHOOLS.find(s => s.id === id);
}

/**
 * Look up a school by name (case-insensitive, partial match).
 */
export function findSchoolByName(name: string): ElSalvadorSchool | undefined {
  const lower = name.toLowerCase().trim();
  if (!lower) return undefined;
  return EL_SALVADOR_SCHOOLS.find(s => s.name.toLowerCase() === lower)
    ?? EL_SALVADOR_SCHOOLS.find(s => s.name.toLowerCase().includes(lower))
    ?? EL_SALVADOR_SCHOOLS.find(s => lower.includes(s.name.toLowerCase()));
}
