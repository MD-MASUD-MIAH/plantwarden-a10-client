import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#2ecc71] to-emerald-700 text-white p-10">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img
              className="w-12 h-12 object-contain"
              src={logo}
              alt="PlantWarden Logo"
            />
            <h2 className="text-2xl font-bold flex items-center sylefont mt-2">
              PlantWarden
            </h2>
          </div>
          <p className="text-emerald-100 text-center max-w-md">
            Your digital companion for healthier, happier plants
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2 w-full text-center md:text-left">
              Quick Links
            </h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              <NavLink
                to="/terms"
                className="hover:text-emerald-200 transition-colors text-sm md:text-base"
                activeClassName="font-bold"
              >
                Terms and Conditions
              </NavLink>
              <NavLink
                to="/help"
                className="hover:text-emerald-200 transition-colors text-sm md:text-base"
                activeClassName="font-bold"
              >
                Help Center
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-emerald-200 transition-colors text-sm md:text-base"
                activeClassName="font-bold"
              >
                About Us
              </NavLink>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2 w-full text-center">
              Connect With Us
            </h3>
            <div className="flex gap-6 mb-4 md:mt-10">
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FaFacebook
                  className="text-blue-300 hover:text-blue-100"
                  size={40}
                />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FaGithub
                  className="text-gray-300 hover:text-gray-100"
                  size={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  className="text-blue-400 hover:text-blue-200"
                  size={40}
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <FaYoutube
                  className="text-red-300 hover:text-red-100"
                  size={40}
                />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2 w-full text-center md:text-right">
              Contact Us
            </h3>
            <div className="text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +8801700000000
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                plantwarden@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-400 pt-6 text-center">
          <p className="text-sm text-emerald-100">
            &copy; {new Date().getFullYear()} Hossain Masood Industries Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
