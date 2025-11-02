import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary py-8 mt-16">
      <div className="container mx-auto text-center text-text-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialIcon href="https://github.com/BlenBizuayehu/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/blen-bizuayehu-6b6933296/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </SocialIcon>
           <SocialIcon href="https://t.me/@blen_2213">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.78 18.24c.26 0 .46-.09.61-.26l2.36-2.28 4.72 3.53c.82.52 1.4.24 1.62-.73l3.24-15.2c.28-1.1-.42-1.58-1.18-1.3l-18.42 7.1c-1.08.42-.98 1.02.12 1.3l4.64 1.45 10.9-6.8c.52-.32.98-.14.58.18l-8.8 7.9-1.02 5.06c.46.46 1.02.48 1.48.3z"/></svg>
          </SocialIcon>
        </div>
        <p>&copy; {new Date().getFullYear()} Blen Bizuayehu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;