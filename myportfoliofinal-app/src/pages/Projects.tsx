
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a collection of projects I've worked on. Each project represents challenges overcome and solutions created.
          </p>
        </div>

        <div className="space-y-24">
          {/* Project 1 */}
          <div id="maringo" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 font-medium">Maringo Sports Club System Screenshot</p>
              </div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-4 text-navy">THE MARINGO SPORTS CLUB SYSTEM</h2>
              <p className="text-gray-600 mb-6">
                A comprehensive management system for Maringo Sports Club that streamlines membership management, facility booking, event scheduling, and financial operations. This system has significantly improved operational efficiency and enhanced member experience.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Socket.io</span>
                </div>
              </div>
              <a 
                href="#" 
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div id="advert" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in">
              <h2 className="text-3xl font-bold mb-4 text-navy">THEADVERT RENDER APP</h2>
              <p className="text-gray-600 mb-6">
                An innovative application for creating, managing, and rendering advertisements across multiple platforms. The app includes features for design, targeting, analytics, and campaign optimization to help businesses maximize their advertising impact.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">AWS</span>
                </div>
              </div>
              <a 
                href="#" 
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 font-medium">TheAdvert Render App Screenshot</p>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div id="ledger" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 font-medium">Financial Digital Ledger Screenshot</p>
              </div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-4 text-navy">THE PERSONAL FINANCIAL DIGITAL LEDGER</h2>
              <p className="text-gray-600 mb-6">
                A secure and user-friendly digital ledger for personal finance management, expense tracking, and budgeting. This application helps users gain control over their finances with intuitive visualizations, smart insights, and financial goal tracking.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Redux</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Chart.js</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Plaid API</span>
                </div>
              </div>
              <a 
                href="#" 
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
