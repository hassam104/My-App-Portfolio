import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail, Code, Smartphone, Globe, ChevronRight } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import { Project, Skill } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React Native, Node.js, and Firebase. Features include user authentication, product filtering, cart management, and payment processing.',
      image: 'Image/E Commerce.jpg',
      tags: ['React Native', 'Node.js', 'Firebase', 'Expo dev'],
      link: 'https://github.com/hassam104/eCommerce-Store',
      demoLink: 'https://www.linkedin.com/posts/hassam-zafar-075728264_reactnative-expo-nodejs-activity-7275522050486657027-Lpq6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDkLFkBO3v_2zRMwrQ6RuXU8VC8wfLAqB8'
    },
    {
      id: 2,
      title: 'Weather checker App',
      description: 'A productivity application built with React Native for cross-platform mobile use. Includes task weather check on location based.',
      image: 'Image/Weahter.jpg',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      link: 'https://github.com/hassam104/Weather-Checker',
      demoLink: 'https://www.linkedin.com/posts/hassam-zafar-075728264_react-nodejs-reactjs-activity-7272313022579171329-QLea?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDkLFkBO3v_2zRMwrQ6RuXU8VC8wfLAqB8'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'A data visualization platform that leverages machine learning to provide insights. Built with Vue.js and Python backend with TensorFlow.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Python', 'TensorFlow', 'D3.js', 'Flask'],
      link: 'https://github.com',
      demoLink: 'https://example.com'
    },
    {
      id: 4,
      title: 'Blogging App',
      description: 'A blog app lets users write, share, and explore articles on various topics. It offers a simple and interactive platform for reading and engagement',
      image: 'Image/blog.jpg',
      tags: ['React Native', 'Expo', 'Node.js',],
      link: 'https://github.com/hassam104/Simple-Blog-disply-app',
      demoLink: 'https://www.linkedin.com/posts/hassam-zafar-075728264_react-nodejs-reactjs-activity-7270863227234775040-t_5w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDkLFkBO3v_2zRMwrQ6RuXU8VC8wfLAqB8'
    }
  ];

  const skills: Skill[] = [
    { id: 1, name: 'Frontend Development', icon: <Globe size={24} />, items: ['React', 'HTML5/CSS3', 'JavaScript/TypeScript'] },
    { id: 2, name: 'Backend Development', icon: <Code size={24} />, items: ['Node.js', 'Python', 'Java'] },
    { id: 3, name: 'Mobile Development', icon: <Smartphone size={24} />, items: ['React Native'] },
    { id: 4, name: 'Database & Cloud', icon: <Github size={24} />, items: ['Firebase', 'MongoDB', 'PostgreSQL'] }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 transition-colors duration-300 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MyPortfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === section ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left py-2 px-4 rounded-md transition-colors duration-300 ${activeSection === section
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4 py-16 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 animate-fadeIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="block">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Hassam Zafar
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                  Full-Stack Developer & App Designer
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                  I create elegant, high-performance applications and websites
                  that deliver exceptional user experiences and solve complex problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Contact Me
                  </button>
                </div>
                <div className="flex mt-8 space-x-4">
                  <a href="https://github.com/hassam104" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/hassam-zafar-075728264/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:hassam625342@gmail.com" className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center animate-fadeIn">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 dark:opacity-40"></div>
                  <img
                    src="Image/piccccc.jpg"
                    alt="Hassam Zafar"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Hassam Zafar is a computer science student from Multan with 3 years of experience in website and app development using React Native. He is always interested in learning about the latest technology and improving his skills.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                He is currently working on an AI chatbot that can take voice input, generate a response using AI, and reply in his own voice. He is using tools like OpenAI Whisper for speech-to-text, Groq API for text generation, and Coqui.ai for text-to-speech.
                I'm passionate about clean code, performance optimization, and creating accessible applications
                that make a positive impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code size={28} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Creating responsive, accessible, and performant web applications using modern frameworks and best practices.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone size={28} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building cross-platform mobile applications that provide native-like experiences with a single codebase.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Globe size={28} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full-Stack Solutions</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Developing end-to-end applications with robust backends, efficient APIs, and intuitive frontends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-gray-700 dark:text-gray-300">
                I've developed expertise across the full software development stack,
                with a focus on creating scalable, maintainable, and user-friendly applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              {skills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-gray-700 dark:text-gray-300">
                Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://github.com/hassam104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                View more projects on GitHub
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-gray-700 dark:text-gray-300">
                Have a project in mind or want to discuss potential opportunities?
                I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 animate-fadeIn">
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:hassam625342@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            Email/Hassam Zafar
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Linkedin className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <a href="https://www.linkedin.com/in/hassam-zafar-075728264/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            linkedin.com/in/hassam-zafar
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Github className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">GitHub</p>
                          <a href="https://github.com/hassam104" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            github.com/Hassam104
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg shadow-md text-white">
                    <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
                    <p className="mb-4">
                      I'm currently available for freelance work and open to discussing new opportunities.
                    </p>
                    <p>
                      Whether you need a complete web application, a mobile app, or help with an existing project,
                      I'm here to bring your ideas to life.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MyPortfolio
              </a>
              <p className="mt-2 text-gray-400 max-w-md">
                Creating innovative digital solutions with a focus on performance, accessibility, and user experience.
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/hassam104" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hassam-zafar-075728264/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hassam625342@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hassam Zafar. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;