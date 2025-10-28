import React from 'react';
import type { Skill } from '../types';

const skillsData: { category: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg> },
      { name: 'Angular', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 4.5l1.5 12.5L12 22l7.5-5L21 4.5 12 2zm-1 4h2l-1 2-1-2zm-.25 3.5h2.5L12 13l-1.25-3.5zM7.75 16l4.25-10.5h.01L16.25 16H14l-2-5-2 5H7.75z"/></svg> },
      { name: 'Next.js', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V9.5h-2V7.5h6v2h-2v5H11z"/></svg> },
      { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M21.2 2.8H2.8A.8.8 0 0 0 2 3.6v16.8a.8.8 0 0 0 .8.8h18.4a.8.8 0 0 0 .8-.8V3.6a.8.8 0 0 0-.8-.8zM12.3 14.8c-.1.2-.3.3-.5.4-.2.1-.4.1-.7.1s-.5 0-.7-.1-.4-.2-.5-.4-.2-.3-.3-.5c0-.2 0-.4.1-.6s.2-.4.4-.5c.2-.1.4-.2.6-.2s.4 0 .6.1l.5.2c.2.1.3.2.4.4.1.2.1.4.1.6zm-1.1-4.1h-2v-2.3h6.3v2.3h-2V16h-2.3v-5.3z"/></svg> },
      { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-3.375 7.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75zm6 4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75z"/></svg> },
      { name: 'Bootstrap', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-9.5 13.5H6v-2h5.5c1.38 0 2.5-1.12 2.5-2.5S12.88 9 11.5 9H6V7h5.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z"/></svg> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M21.1,8.9l-6.8-4.2c-0.5-0.3-1.2-0.3-1.7,0L5.9,8.9c-0.5,0.3-0.9,0.9-0.9,1.5v8.3c0,0.6,0.3,1.2,0.9,1.5l6.8,4.2c0.5,0.3,1.2,0.3,1.7,0l6.8-4.2c0.5-0.3,0.9-0.9,0.9-1.5v-8.3C22,9.8,21.7,9.2,21.1,8.9z M12,21.5L6.4,18V11l5.6,3.5V21.5z M12,13.5L6.4,10L12,6.5L17.6,10L12,13.5z M17.6,18L12,21.5v-7l5.6-3.5V18z"/></svg> },
      { name: 'Express.js', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.38-.67.76-1.33 1.52-2.65 3.04-5.3 4.56-7.95C12.58 3.81 12.58 4 13 4h1l-1 7h3.5c.58 0 .57.32.38.66-.19.34-.38.67-.76 1.33-1.52 2.65-3.04 5.3-4.56 7.95-.16.27-.16.05-.62.05z"/></svg> },
      { name: 'Vert.x', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M2.3,11.5L8,17.2l13.7-13.7l-2.3-2.3L8,12.6L4.6,9.2L2.3,11.5z"/></svg> },
      { name: 'REST API', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg> },
      { name: 'GraphQL', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8l5-3.5 5 3.5v-2l-5-3.5-5 3.5v2zM7 12l5 3.5 5-3.5v2l-5 3.5-5-3.5v-2z"/></svg> },
      { name: 'MERN Stack', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5L12 2zm0 17.5L2 14.5v-5L12 15l10-5.5v5L12 19.5z"/></svg>},
    ],
  },
  {
    category: 'Databases & DevOps',
    skills: [
      { name: 'MongoDB', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M16.17,10.5C16.17,15.1,12,18,12,18s-4.17-2.9-4.17-7.5c0-3.32,1.86-4.5,4.17-4.5S16.17,7.18,16.17,10.5Z"/></svg> },
      { name: 'Git & GitHub', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg> },
      { name: 'Docker', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M22.68 8.4c-2.02-.6-3.83-2.09-5.18-3.93-1.65-2.27-2.61-4.47-2.61-4.47s-.06.01-.17.01c-1.3 0-2.58.5-3.53 1.41-1.22 1.18-1.63 2.58-1.63 3.94 0 .61.08 1.21.24 1.77H1.36c-.43 0-.78.35-.78.78v2.09c0 .43.35.78.78.78h.83c.33 2.11 1.72 4.1 4.13 4.1.35 0 .69-.04 1.02-.11v2.32c0 .43.35.78.78.78h2.09c.43 0 .78-.35.78-.78v-2.09c0-.43-.35-.78-.78-.78H9.38c0-1.11.08-2.5.24-3.35h2.89c.43 0 .78-.35.78-.78V12.1c0-.43-.35-.78-.78-.78h-2.1c.16-.56.24-1.16.24-1.77 0-.35-.02-.69-.07-.99.64-.18 1.33-.29 2.1-.29 1.11 0 2.22.24 3.3.73.9.41 1.63.95 2.22 1.58.68.71 1.14 1.52 1.35 2.37H19.2c.43 0 .78-.35.78-.78v-2.09c0-.43-.35-.78-.78-.78h-1.28c.11-.64.11-1.28 0-1.92h2.09c.43 0 .78-.35.78-.78v-2.09c0-.43-.35-.78-.78-.78z M7.79 17.15c-1.4 0-2.54-1.14-2.54-2.54s1.14-2.54 2.54-2.54c1.42 0 2.61 1.16 2.61 2.61s-1.15 2.47-2.61 2.47z"/></svg> },
      { name: 'Vercel', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 15 10-15L12 2z"/></svg> },
      { name: 'Render', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.1 6.3h2.6c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1h-.9v2.2h-1.7V8.3zm1.7 2.8h.9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-.9v1z"/></svg> },
      { name: 'CI/CD', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg> },
    ],
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


const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-background-secondary p-6 rounded-lg shadow-lg shadow-black/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-gray-700 hover:border-primary/50 h-full">
    <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[12deg]">
      {skill.icon}
    </div>
    <h3 className="text-lg font-semibold text-text-primary mt-auto">{skill.name}</h3>
  </div>
);

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="My Skills">
      <div className="space-y-16">
        {skillsData.map((group, groupIndex) => (
          <div key={group.category}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-text-primary opacity-0 animate-fade-in-up" style={{ animationDelay: `${groupIndex * 300}ms`}}>
              {group.category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {group.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${groupIndex * 300 + (skillIndex + 1) * 75}ms`}}>
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;