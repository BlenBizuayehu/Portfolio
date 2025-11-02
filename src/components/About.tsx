import React from 'react';

import profile1 from "../../assets/profile1.jpg"; // adjust relative path


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


const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 animate-slide-in-left">
          <div className="relative">
            <img 
              src={profile1}
              alt="Profile" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto object-cover border-4 border-background-secondary shadow-2xl shadow-black/50" 
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 animate-pulse"></div>
          </div>
        </div>
        <div className="md:col-span-3 text-lg text-text-secondary text-center md:text-left animate-fade-in-up">
          <p className="mb-4">
            I'm a passionate Software Engineer with a strong foundation in full-stack development. My journey in tech began with a curiosity for how things work, which quickly evolved into a love for building elegant and efficient applications.
          </p>
          <p className="mb-4">
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and thrive on turning complex problems into beautiful, intuitive user experiences. I'm constantly learning and exploring new technologies to enhance my skills and stay at the forefront of web development.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;