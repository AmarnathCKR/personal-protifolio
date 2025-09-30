import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Building, User } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Jeev AI Private Limited',
      location: 'Mysuru, Karnataka',
      period: '2024 - Present',
      type: 'Current Position',
      description: 'Developing cutting-edge AI-powered web applications with a focus on user experience and performance optimization.',
      highlights: [
        'Leading frontend development for AI-powered applications',
        'Implementing responsive designs with modern frameworks',
        'Collaborating with AI/ML teams for seamless integration',
        'Optimizing application performance and user experience'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Ekk Digital Vyapar Services',
      location: 'Surat, Gujarat',
      period: '2022 - 2024',
      type: '2 Years',
      description: 'Built and maintained full-stack web applications, focusing on scalable solutions and modern development practices.',
      highlights: [
        'Developed complete MERN stack applications from scratch',
        'Implemented RESTful APIs and database design',
        'Created responsive user interfaces with React.js',
        'Managed deployment and monitoring on cloud platforms'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute('data-item-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, itemIndex]));
            }, itemIndex * 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const experienceElements = document.querySelectorAll('.experience-item');
    experienceElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Professional journey in web development with focus on creating 
              impactful digital solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-0.5 ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isVisible = visibleItems.has(index);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`experience-item relative ${
                      isVisible ? 'animate-fadeInUp' : 'opacity-0'
                    }`}
                    data-item-index={index}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:items-start`}>
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 md:left-1/2 w-4 h-4 transform ${
                        isEven ? 'md:-translate-x-2' : 'md:-translate-x-2'
                      } -translate-y-2 md:translate-y-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10 flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ${
                        isEven ? 'md:pr-12 ml-12 md:ml-0' : 'md:pl-12 ml-12 md:ml-0'
                      }`}>
                        <div className={`p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                          isDark 
                            ? 'bg-gray-800 hover:bg-gray-800/80' 
                            : 'bg-white hover:shadow-xl'
                        } group`}>
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Building className="w-4 h-4 text-blue-500" />
                              <span className={`text-sm font-medium ${
                                isDark ? 'text-blue-400' : 'text-blue-600'
                              }`}>
                                {exp.company}
                              </span>
                            </div>
                            
                            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {exp.title}
                            </h3>

                            <div className="flex flex-wrap gap-4 mb-3">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className={`text-sm ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  {exp.location}
                                </span>
                              </div>
                              
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className={`text-sm ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  {exp.period}
                                </span>
                              </div>
                            </div>

                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              index === 0
                                ? 'bg-green-100 text-green-800'
                                : isDark
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {exp.type}
                            </span>
                          </div>

                          {/* Description */}
                          <p className={`mb-4 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {exp.description}
                          </p>

                          {/* Highlights */}
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className={`flex items-start space-x-3 text-sm ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden md:block w-5/12"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Status */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-6 rounded-xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <User className="w-6 h-6 text-blue-500" />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Currently Available
                </h3>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Open to new opportunities and exciting projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;