import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
  <footer
    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-3xl max-w-4xl mx-auto px-6 pt-6 pb-10 text-center mt-1 shadow-md"
    data-aos="fade-up"
  >

      <h2 className="text-2xl font-semibold mb-2">Want to get in touch?</h2>
      <p className="text-me mb-4">
        Send me an email{' '}
        <a
          href="mailto:rajaramjaga@gmail.com"
          className="underline text-blue-500 dark:text-blue-400"
        >
          rajaramjaga@gmail.com
        </a>
      </p>
      <div className="flex justify-center gap-5 mt-3 mb-1 text-gray-700 dark:text-gray-300">
        <a
          href="https://www.instagram.com/raam_maddy/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hover:text-teal-500 transition-transform duration-300 transform hover:scale-110"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rajaram-jagadeeswaran-684b14165/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-teal-500 transition-transform duration-300 transform hover:scale-110"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Rajaram-Jagadeeswaran"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-teal-500 transition-transform duration-300 transform hover:scale-110"
        >
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
}
