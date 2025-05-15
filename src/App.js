import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import Navbar from './components/Navbar';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-200 text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="pt-24 flex flex-col items-center gap-10 px-4 scroll-smooth">
        <div className="w-full max-w-2xl">
          <HeroSection />
        </div>
        <div className="w-full max-w-2xl">
          <CareerSection />
        </div>
        <div className="w-full max-w-2xl">
          <WorkSection />
        </div>
        <div className="w-full max-w-2xl mx-auto mb-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
