import React from 'react';

const icons = [
  // React
  (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>,
  // Node.js
  (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.1,8.9l-6.8-4.2c-0.5-0.3-1.2-0.3-1.7,0L5.9,8.9c-0.5,0.3-0.9,0.9-0.9,1.5v8.3c0,0.6,0.3,1.2,0.9,1.5l6.8,4.2c0.5,0.3,1.2,0.3,1.7,0l6.8-4.2c0.5-0.3,0.9-0.9,0.9-1.5v-8.3C22,9.8,21.7,9.2,21.1,8.9z M12,21.5L6.4,18V11l5.6,3.5V21.5z M12,13.5L6.4,10L12,6.5L17.6,10L12,13.5z M17.6,18L12,21.5v-7l5.6-3.5V18z"/></svg>,
  // TypeScript
  (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.2 2.8H2.8A.8.8 0 0 0 2 3.6v16.8a.8.8 0 0 0 .8.8h18.4a.8.8 0 0 0 .8-.8V3.6a.8.8 0 0 0-.8-.8zM12.3 14.8c-.1.2-.3.3-.5.4-.2.1-.4.1-.7.1s-.5 0-.7-.1-.4-.2-.5-.4-.2-.3-.3-.5c0-.2 0-.4.1-.6s.2-.4.4-.5c.2-.1.4-.2.6-.2s.4 0 .6.1l.5.2c.2.1.3.2.4.4.1.2.1.4.1.6zm-1.1-4.1h-2v-2.3h6.3v2.3h-2V16h-2.3v-5.3z"/></svg>,
  // Tailwind
  (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-3.375 7.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75zm6 4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75z"/></svg>,
  // MongoDB
  (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.17,10.5C16.17,15.1,12,18,12,18s-4.17-2.9-4.17-7.5c0-3.32,1.86-4.5,4.17-4.5S16.17,7.18,16.17,10.5Z"/></svg>,
  // Express
  (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.38-.67.76-1.33 1.52-2.65 3.04-5.3 4.56-7.95C12.58 3.81 12.58 4 13 4h1l-1 7h3.5c.58 0 .57.32.38.66-.19.34-.38.67-.76 1.33-1.52 2.65-3.04 5.3-4.56 7.95-.16.27-.16.05-.62.05z"/></svg>,
];

const particleCount = 18;
const particles = Array.from({ length: particleCount }).map((_, i) => ({
  id: i,
  Icon: icons[i % icons.length],
}));

const TechParticles: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {particles.map(({ id, Icon }) => (
        <div
          key={id}
          className="absolute text-primary/40 animate-gentle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 25 + 25}s`,
            animationDelay: `${Math.random() * 25}s`,
            transform: `scale(${Math.random() * 0.3 + 0.4})`,
            willChange: 'transform, opacity',
          }}
        >
          <Icon className="w-10 h-10 md:w-14 md:h-14" />
        </div>
      ))}
    </div>
  );
};

export default TechParticles;