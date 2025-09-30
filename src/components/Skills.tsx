import React, { useState, useEffect } from 'react';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [visibleBars, setVisibleBars] = useState<Set<number>>(new Set());

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'SQL', level: 80 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'REST API', level: 85 },
        { name: 'Socket.IO', level: 75 }
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            setTimeout(() => {
              setVisibleBars(prev => new Set([...prev, skillIndex]));
            }, skillIndex * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('.skill-bar');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Proficient in modern web development technologies with hands-on experience 
              in building scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-800/80' 
                    : 'bg-white hover:shadow-xl'
                } group`}
              >
                <h3 className={`text-2xl font-semibold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * 4 + skillIndex;
                    const isVisible = visibleBars.has(globalIndex);
                    
                    return (
                      <div
                        key={skillIndex}
                        className="skill-bar"
                        data-skill-index={globalIndex}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-medium ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {skill.name}
                          </span>
                          <span className={`text-sm font-semibold ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className={`w-full h-3 rounded-full overflow-hidden ${
                          isDark ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className={`text-2xl font-semibold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Additional Expertise
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Problem Solving',
                'Data Structures & Algorithms',
                'Web Scraping',
                'UI/UX Design',
                'Figma',
                'Project Deployment',
                'AWS Monitoring',
                'Azure',
                'Agile Methodology',
                'Git/GitHub',
                'JWT Authentication',
                'Payment Integration'
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;