import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, ArrowRight, X, ShoppingCart, GraduationCap } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Fab Galaxy',
      subtitle: 'E-commerce Web App',
      description: 'A modern e-commerce platform for women\'s clothing with elegant design and comprehensive features.',
      longDescription: 'Fab Galaxy is a full-featured e-commerce website specializing in women\'s clothing. The platform combines elegant design with robust functionality to deliver an exceptional shopping experience.',
      image: '/src/assets/images/fab-galaxy-1.png',
      icon: <ShoppingCart className="w-6 h-6" />,
      period: 'November 2023 – February 2024',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'CSS'],
      features: [
        'Modern, responsive user interface with elegant design',
        'Complete user authentication and profile management',
        'Advanced product catalog with filtering and search',
        'Secure shopping cart and checkout process',
        'Admin dashboard for user and inventory management',
        'DTDC courier API integration for order tracking',
        'SEO optimization for improved market reach',
        'Payment gateway integration',
        'Real-time order status updates'
      ],
      liveLink: 'https://fab-galaxy-testing.netlify.app/',
      githubLink: 'https://github.com/AmarnathCKR/fab-galaxy-admin-panel'
    },
    {
      id: 2,
      title: 'Edugo',
      subtitle: 'eLearning Platform',
      description: 'An innovative e-learning platform designed to revolutionize online education with interactive features.',
      longDescription: 'Edugo is a comprehensive e-learning platform that provides a safe and interactive environment for students and educators to connect, learn, and collaborate.',
      image: '/src/assets/images/edugo.png',
      icon: <GraduationCap className="w-6 h-6" />,
      period: 'June 2023 – July 2023',
      technologies: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      features: [
        'Secure user authentication with Google OAuth integration',
        'Comprehensive course management system',
        'Real-time chat functionality with Socket.IO',
        'Interactive learning materials and assessments',
        'Progress tracking and analytics',
        'PayPal payment integration for course purchases',
        'Responsive design for all devices',
        'Email notifications with NodeMailer',
        'Firebase storage for course materials'
      ],
      liveLink: 'https://github.com/AmarnathCKR/EduGo-e-Learning-Platform',
      githubLink: 'https://github.com/AmarnathCKR/EduGo-e-Learning-Platform'
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Showcasing innovative web applications built with modern technologies 
              and best practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50'
                } hover:shadow-2xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.period}
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {project.subtitle}
                  </p>
                  
                  <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          isDark 
                            ? 'bg-gray-800 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-300 text-gray-600'
                      }`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => openModal(project.id)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}>
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-300 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                  {selectedProjectData.icon}
                </div>
                <div>
                  <h3 className={`text-3xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedProjectData.title}
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selectedProjectData.subtitle}
                  </p>
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selectedProjectData.period}
                  </p>
                </div>
              </div>

              <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProjectData.longDescription}
              </p>

              <div className="mb-8">
                <h4 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {selectedProjectData.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start space-x-3 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProjectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        isDark 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProjectData.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live</span>
                </a>
                <a
                  href={selectedProjectData.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 border-2 ${
                    isDark 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;