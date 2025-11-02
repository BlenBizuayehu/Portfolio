import React from 'react';
import type { Project } from '../types';

import project1 from '../assets/projects/project1.png';


const projectsData: Project[] = [
  {
    title: 'Qemer Student Registration',
    description: 'A streamlined and user-friendly student registration platform. Built with a modern frontend stack to ensure a seamless course booking and registration of students.',
    tags: ['React', 'Node.js', 'JavaScript', 'Vercel'],
    imageUrl: project1,
    liveUrl: 'https://qemer-registration-frontend-mquefed79-blen-bizuayehus-projects.vercel.app/',
    githubUrl: 'https://github.com/BlenBizuayehu/qemer_registration_frontend',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product listings, user authentication, a shopping cart, and a Stripe-integrated checkout process.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/project1/500/300',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A web-based chat app using Socket.IO for instant messaging, user presence indicators, and private chat rooms.',
    tags: ['React', 'Node.js', 'Socket.IO', 'JWT'],
    imageUrl: 'https://picsum.photos/seed/project2/500/300',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Dashboard',
    description: 'A collaborative dashboard for teams to manage tasks, track project progress, and communicate effectively. Features drag-and-drop functionality.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project3/500/300',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const SectionWrapper: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-primary inline-block pb-2">
        {title}
      </h2>
    </div>
    {children}
  </section>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-background-secondary rounded-lg overflow-hidden shadow-lg shadow-black/20 transform transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white p-3 rounded-full bg-primary hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white p-3 rounded-full bg-primary hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-text-secondary mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
             <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;