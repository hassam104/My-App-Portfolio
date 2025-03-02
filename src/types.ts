import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  demoLink: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: ReactNode;
  items: string[];
}