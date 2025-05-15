import React from 'react';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ title, tech, image, link }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-1">{tech}</p>
        <a href={link} target="_blank" rel="noreferrer" className="mt-4">
          <ExternalLink size={24} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
