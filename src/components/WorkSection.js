import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import thesisImg from '../assets/Thesis.png';
import githubImg from '../assets/GitHub.png';

function WorkSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="work"
      className="scroll-mt-24 pt-6 pb-10 px-4 bg-white dark:bg-gray-800 rounded-3xl shadow-lg max-w-4xl mx-auto mb-4"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white text-center">My Work</h2>

      {/* Project 1 - AI Comparison */}
      <a
        href="https://youtu.be/vER0v75KzvM"
        target="_blank"
        rel="noreferrer"
        className="block bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] mb-6"
      >
        <div className="p-4">
          <img
            src={thesisImg}
            alt="Thesis Preview"
            className="rounded-xl mb-4 w-full"
          />
          <h3 className="text-2xl font-semibold mb-1">AI Comparison</h3>
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Optimizing Healthcare Framework Using Cognitive Computing Techniques in Cloud: A Study on Enhancing Diagnostic Accuracy and Decision-Making
          </p>
          <span className="text-teal-600 font-medium inline-flex items-center text-sm">
            Demo <span className="ml-1">↗</span>
          </span>
        </div>
      </a>

      {/* Project 2 - GitHub Preview */}
      <a
        href="https://github.com/Rajaram-Jagadeeswaran"
        target="_blank"
        rel="noreferrer"
        className="block bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="p-4">
          <img
            src={githubImg}
            alt="GitHub Profile"
            className="rounded-xl mb-4 w-full"
          />
          <h3 className="text-xl font-bold mb-2">GitHub: Rajaram Jagadeeswaran</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Checkout my GitHub to get more impression
          </p>
          <span className="text-teal-600 font-medium inline-flex items-center mt-2 text-sm">
            View on GitHub <span className="ml-1">↗</span>
          </span>
        </div>
      </a>
    </section>
  );
}

export default WorkSection;
