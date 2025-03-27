
export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-navy flex-shrink-0 mt-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
        <div>
          <h4 className="font-semibold text-navy">Email</h4>
          <a 
            href="mailto:gaoajuoga@gmail.com" 
            className="text-gray-600 hover:text-royal"
          >
            gaoajuoga@gmail.com
          </a>
          <br />
          <a 
            href="mailto:godswill.omondi@gmail.com" 
            className="text-gray-600 hover:text-royal"
          >
            godswill.omondi@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-navy flex-shrink-0 mt-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
          />
        </svg>
        <div>
          <h4 className="font-semibold text-navy">Phone</h4>
          <a 
            href="tel:+254740275539" 
            className="text-gray-600 hover:text-royal"
          >
            +254 740 275 539
          </a>
          <br />
          <a 
            href="tel:+254753600638" 
            className="text-gray-600 hover:text-royal"
          >
            +254 753 600 638
          </a>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-navy flex-shrink-0 mt-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
        <div>
          <h4 className="font-semibold text-navy">Location</h4>
          <p className="text-gray-600">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};
