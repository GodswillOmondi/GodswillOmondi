
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  index: number;
}

export const ProjectCard = ({ title, description, link, index }: ProjectCardProps) => {
  return (
    <div 
      className="project-card animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-xl font-bold mb-3 text-navy">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link} 
        className="text-royal font-medium hover:underline inline-flex items-center"
      >
        View Project
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </Link>
    </div>
  );
};
