import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'MERN Stack Developer',
    'Full Stack Engineer',
    'React.js Specialist',
    'Node.js Developer'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeEffect = () => {
      if (!isDeleting && charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeEffect, 100);
      } else if (!isDeleting && charIndex > currentTitle.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 2000);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
        timeoutId = setTimeout(typeEffect, 50);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        timeoutId = setTimeout(typeEffect, 200);
      }
    };

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${
                  isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                }`}>
                  AC
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amarnath C
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className={`text-xl md:text-3xl font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A self-taught MERN Stack developer with a proven track record of designing, 
            developing and deploying scalable web applications. Passionate about creating 
            innovative solutions with cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => window.open('https://drive.google.com/file/d/1SfRc8vHWyT4d-LKX_APiG9toY0sLaLxV/view?usp=drivesdk', '_blank')} className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </span>
            </button>
            <button 
              onClick={() => window.open('https://github.com/amarnathckr', '_blank')}
              className={`group px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center space-x-2">
                <ExternalLink className="w-5 h-5" />
                <span>View Projects</span>
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-wrap justify-center gap-6 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <a href="tel:+918848174816" className="hover:text-blue-500 transition-colors duration-300">
              +91 8848174816
            </a>
            <a href="mailto:ckramarnath@gmail.com" className="hover:text-blue-500 transition-colors duration-300">
              ckramarnath@gmail.com
            </a>
            <span>Mysuru, Karnataka</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        } transition-colors duration-300`}
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;