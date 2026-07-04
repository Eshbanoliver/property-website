// ============================================================
// SHARED TYPESCRIPT TYPES
// ============================================================

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  service: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CoreValue {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface WhyChooseUs {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}
