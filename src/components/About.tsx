import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Node.js, Express, REST APIs, Socket.IO'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database & Cloud',
      description: 'MongoDB, PostgreSQL, AWS, Firebase'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile & Design',
      description: 'Responsive Design, UI/UX, Figma'
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className={`text-2xl md:text-3xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Crafting Digital Experiences with Passion
              </h3>
              
              <div className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p className="mb-4">
                  I'm a passionate self-taught MERN Stack developer with over 2 years of experience 
                  in building scalable web applications. My journey began with curiosity and has 
                  evolved into a deep expertise in modern web technologies.
                </p>
                <p className="mb-4">
                  Currently working as a Frontend Developer at Jeev AI Private Limited, I specialize 
                  in creating user-centric applications that blend functionality with beautiful design. 
                  My experience spans from e-commerce platforms to educational applications.
                </p>
                <p>
                  I'm dedicated to continuous learning and staying up-to-date with the latest industry 
                  trends, always looking for opportunities to tackle challenging problems and create 
                  innovative solutions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className={`text-center p-4 rounded-lg ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50'
                }`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Years Experience
                  </div>
                </div>
                <div className={`text-center p-4 rounded-lg ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50'
                }`}>
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDark 
                      ? 'bg-gray-900 hover:bg-gray-900/80' 
                      : 'bg-gray-50 hover:bg-white hover:shadow-xl'
                  } group`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-6 rounded-xl ${
              isDark ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
              <h4 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Education
              </h4>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                BSc Mathematics
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                University of Calicut • 2018 - 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;