
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-navy rounded-md p-2 text-white font-bold">
                <span className="text-white mr-1">A</span>
                <span>GODSWILL</span>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
            <SocialLinks />
          </div>
          
          <div className="text-gray-600 text-sm">
            © {currentYear} Godswill. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
