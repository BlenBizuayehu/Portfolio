import type React from 'react';

export interface Skill {
  name: string;
  // FIX: Replaced JSX.Element with React.ReactNode and imported React type to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  imageUrl: string;
  verifyUrl: string;
}