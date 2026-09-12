export interface Project {
  id: number;
  title: string;
  rank: string;
  desc: string;
  highlightText: string;
  tech: string[];
  img: string;
  github: string;
  live: string;
}

export interface SkillTechnique {
  technique: string;
  tech_stack: string;
  tag: string;
  lore: string;
  desc: string[];
  realmAccent: 'purple' | 'yellow' | 'red' | 'cyan' | 'emerald' | 'blue' | 'indigo' | 'orange';
}

export interface TimelineMilestone {
  year: string;
  title: string;
  desc: string;
  rank: string;
}

export interface Achievement {
  title: string;
  desc: string;
  type: 'ai' | 'academic' | 'api';
}

export interface NavItem {
  name: string;
  href: string;
}
