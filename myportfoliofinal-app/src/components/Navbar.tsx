
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-navy/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-navy dark:bg-white rounded-md p-2 text-white dark:text-navy font-bold">
            <span className="text-white dark:text-navy mr-1">A</span>
            <span>GODSWILL</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${pathname === "/" ? "active-link" : ""}`}>
              HOME
            </Link>
            <Link to="/projects" className={`nav-link ${pathname === "/projects" ? "active-link" : ""}`}>
              PROJECTS
            </Link>
            <Link to="/contact" className={`nav-link ${pathname === "/contact" ? "active-link" : ""}`}>
              CONTACT
            </Link>
            <Link to="/about" className={`nav-link ${pathname === "/about" ? "active-link" : ""}`}>
              ABOUT ME
            </Link>
          </nav>
          
          <ThemeToggle />

          <div className="md:hidden">
            <button className="p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white dark:bg-navy dark:text-white shadow-md p-4 animate-fade-in">
                <div className="flex flex-col space-y-3">
                  <Link 
                    to="/" 
                    className={`nav-link ${pathname === "/" ? "active-link" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  <Link 
                    to="/projects" 
                    className={`nav-link ${pathname === "/projects" ? "active-link" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    PROJECTS
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`nav-link ${pathname === "/contact" ? "active-link" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                  <Link 
                    to="/about" 
                    className={`nav-link ${pathname === "/about" ? "active-link" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT ME
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
