import React, { useState, useEffect } from 'react';
import { Moon, Download, Sun } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const nav = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav?.classList.add('shadow-xl');
    } else {
      nav?.classList.remove('shadow-xl');
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  // This handles applying the "dark" class to the root element
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-2xl">
      <div className="flex items-center justify-between px-6 py-2 rounded-full 
        bg-white/80 dark:bg-gray-800/80 
        backdrop-blur-md shadow-md border border-white/30 dark:border-gray-700">
        
        <div className="flex items-center gap-4">
          <span className="text-purple-600 font-bold">Rajaram</span>
          <a href="#work" className="text-gray-700 dark:text-gray-300 text-sm">Experties</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/cv.pdf"
            download
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium transition"
          >
            <Download size={14} /> cv
          </a>
        </div>
      </div>
    </nav>
  );
}
