import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border-t ${
      isDark ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AC</span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Amarnath C
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    MERN Stack Developer
                  </p>
                </div>
              </div>
              <p className={`max-w-md leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate about creating innovative web solutions with modern technologies. 
                Always eager to take on new challenges and deliver exceptional results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`transition-colors duration-300 hover:text-blue-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:ckramarnath@gmail.com"
                    className={`flex items-center space-x-2 transition-colors duration-300 hover:text-blue-500 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">ckramarnath@gmail.com</span>
                  </a>
                </li>
                <li>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Mysuru, Karnataka, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com/AmarnathCKR"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amarnathckr/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ckramarnath@gmail.com"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className={`flex items-center space-x-4 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>© {currentYear} Amarnath C. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 ${
          isDark 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;