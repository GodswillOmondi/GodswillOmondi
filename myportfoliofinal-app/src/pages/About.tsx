
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
    "Python", "Django", "Express", "MongoDB", "PostgreSQL", 
    "AWS", "Docker", "Git", "Responsive Design", "UI/UX", 
    "RESTful APIs", "GraphQL", "Agile Methodologies"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">About Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me as a software engineer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/c27c4616-7d40-4269-a1a2-eab2c99a599e.png" 
                alt="Godswill Portrait" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-navy rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold mb-6 text-navy">Godswill</h2>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Software Engineer</h3>
            
            <p className="text-gray-600 mb-6">
              Hello! I'm Godswill, a passionate Software Engineer based in Nairobi, Kenya. I specialize in creating 
              elegant, efficient, and user-focused digital solutions that address real-world challenges.
            </p>
            
            <p className="text-gray-600 mb-6">
              With a strong foundation in both frontend and backend development, I enjoy the process of 
              bringing ideas to life through code. My approach combines technical expertise with creative 
              problem-solving to deliver applications that not only function flawlessly but also provide 
              exceptional user experiences.
            </p>
            
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in continuous learning and staying 
              ahead of industry trends to deliver cutting-edge solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-navy text-navy px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-navy hover:text-white">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-10 text-navy text-center">Technical Skills</h2>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-navy/10 text-navy rounded-full transition-all duration-300 hover:bg-navy hover:text-white"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold mb-6 text-navy">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities, collaborations, and connecting with fellow 
            developers and technology enthusiasts.
          </p>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
