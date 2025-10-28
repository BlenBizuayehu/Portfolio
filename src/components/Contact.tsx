import React, { useState } from 'react';

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-text-secondary mb-10">
          Have a project in mind or just want to say hi? Feel free to send me a message. I'm always open to discussing new opportunities.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up bg-background-secondary p-8 rounded-lg shadow-lg shadow-black/20">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-background border border-gray-700 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-primary transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-background border border-gray-700 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-primary transition-all"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-background border border-gray-700 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-primary transition-all"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.23)] hover:-translate-y-1"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;