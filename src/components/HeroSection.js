import React from 'react';
import avatar from '../assets/avatar.png';

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-3xl shadow-lg max-w-4xl mx-auto overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background blobs */}
      <div className="blob__parent absolute inset-0 z-0">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 z-10">
        Hi <span className="inline-block">👋</span> I'm Rajaram
      </h1>

      {/* Avatar */}
      <img
        src={avatar}
        alt="Rajaram Avatar"
        className="w-40 h-40 md:w-44 md:h-44 object-contain z-10"
      />

      {/* Intro Text */}
      <p className="max-w-2xl text-lg md:text-xl font-normal mt-6 z-10">
        “A cloud computing graduate passionate about full-stack and cloud-native development.
        I build scalable solutions blending simplicity, automation, and innovation through modern cloud and web technologies.”
        <br /> 
        Scroll down to know more about me.
        <br />
        <span className="block mt-4">Open to software and platform roles across Ireland and Europe.</span>
      </p>
    </section>
  );
}
