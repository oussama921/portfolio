export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  highlights: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  start: number;
  end: number;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  yearsOfExperience: number;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  services: Service[];
  focus: string[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  languages: Language[];
}
