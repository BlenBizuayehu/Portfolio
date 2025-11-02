import React from 'react';
import type { Achievement } from '../types';

import cert1 from '../assets/certificates/cert1.jpg';
import cert2 from '../assets/certificates/cert2.jpg';
import cert3 from '../assets/certificates/cert3.png';



const achievementsData: Achievement[] = [
  {
    title: 'Introduction to Coding',
    issuer: 'SheCodes',
    imageUrl: cert1
    },
  {
    title: 'MERN Stack Development',
    issuer: 'Qemer Software Technologies PLC',
    imageUrl: cert2
  },
  {
    title: 'Fundamentlas of AI',
    issuer: 'Udacity',
    imageUrl: cert3
  }
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


const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  return (
    <div className="bg-background-secondary rounded-lg overflow-hidden shadow-lg shadow-black/20 transform transition-all duration-500 hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text-primary">{achievement.title}</h3>
        <p className="text-text-secondary mb-4">Issued by: {achievement.issuer}</p>
       
      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <SectionWrapper id="achievements" title="My Achievements">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => (
          <div key={achievement.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
             <AchievementCard achievement={achievement} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
