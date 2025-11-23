export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'core' | 'plugin' | 'system' | 'optimization';
}

export interface Project {
  name: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
  projects: Project[];
}

export interface Stat {
  label: string;
  value: string | number;
  icon: any;
  color: string;
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  category: string;
  url: string;
}

export interface ProjectShowcaseData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steamLink: string;
  tags: string[];
  videoUrl: string; // Embed URL for the PV
  images: string[]; // Screenshot URLs
  stats: { label: string; value: string }[];
}