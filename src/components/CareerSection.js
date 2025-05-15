import React, { useState } from 'react';

export default function CareerSection() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = ['HTML/CSS', 'JavaScript ES6', 'MySQL', 'Python', 'React', 'GitHub', 'AWS', 'Node.js', 'Express.js', 'Claude AI', 'Cursor'];
  const education = `I received a master’s degree in Cloud Computing from the National College of Ireland, and I completed my bachelor’s degree in Computer Science Engineering at Anna University, India`;

  return (
    <section className="max-w-4xl mx-auto px-6 py-8 rounded-3xl + bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Career</h2>
      <p className="mb-4">
        I worked at WNS-Vuram Technologies for over two years as an Associate Technical Consultant, helping develop enterprise tools and integrating modern APIs. Before that, I interned at Tata Consultancy Services, leading API integrations and contributing to QA automation.
      </p>
      <p className="mb-4">
        My passion for scalable and cloud-native solutions grew with each project, whether I was integrating smart LLM-powered services into maps or enhancing systems for government agencies and enterprise clients like KONE.  
      </p>
      <p className="mb-4">
        To expand my expertise, I moved to Ireland and pursued an MSc in Cloud Computing. This journey reshaped my outlook on modern tech from DevOps to AI and sharpened my skills in AWS, automation, and data-driven development.
      </p>
      <p className="mb-4">
        Today, I continue to build on this foundation as I seek exciting full-time opportunities.
      </p>

      <div className="mt-8">
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
            activeTab === 'skills'
              ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
              : 'bg-white text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-500'
          }`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
            activeTab === 'education'
              ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
              : 'bg-white text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-500'
          }`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>


        {activeTab === 'skills' ? (
          <div className="flex flex-wrap justify-center gap-1">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 border border-white rounded-md text-sm">
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-center text-me max-w-xl mx-auto">
            {education}
          </p>
        )}
      </div>
    </section>
  );
}
