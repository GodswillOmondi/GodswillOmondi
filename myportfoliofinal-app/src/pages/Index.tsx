
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const Index = () => {
  const projectsData = [
    {
      title: "THE MARINGO SPORTS CLUB SYSTEM",
      description: "A comprehensive management system for Maringo Sports Club, handling membership, bookings, and event management.",
      link: "/projects#maringo"
    },
    {
      title: "THEADVERT RENDER APP",
      description: "An innovative application for creating, managing, and rendering advertisements across multiple platforms.",
      link: "/projects#advert"
    },
    {
      title: "THE PERSONAL FINANCIAL DIGITAL LEDGER",
      description: "A secure and user-friendly digital ledger for personal finance management, expense tracking, and budgeting.",
      link: "/projects#ledger"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">
              Featured Projects
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. These showcase my skills and experience in software engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="section-title inline-block mb-8">
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            I'm currently available for freelance projects, collaborations, and job opportunities. Let's create something amazing together.
          </p>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
