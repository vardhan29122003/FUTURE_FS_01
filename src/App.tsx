import React from 'react';
<<<<<<< HEAD

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p>Start prompting (or editing) to see magic happen :)</p>
=======
import { Code, Github, Mail, Phone, User, Briefcase, Award, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white"></h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-white pt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vishnu Vardhan
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-white/90">Aspiring software developer</p>
            <p className="text-lg opacity-80 mb-8">Building secure, innovative solutions for tomorrow</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:vardhanyadlapalli225@gmail.com" className="text-white/80 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+918247439115" className="text-white/80 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Self-motivated and technically proficient B.Tech Cybersecurity student with a strong foundation in programming and software development. Proficient in Python and well-versed in object-oriented programming, data structures, and algorithms.
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                Passionate about creating innovative, user-centric applications and solving real-world problems through clean, efficient code. Eager to contribute to impactful software projects by leveraging strong analytical thinking and a developer mindset.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Active Listener</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Self-Motivated</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Quick Learner</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white">B.Tech in Cybersecurity</p>
                    <p className="text-white/80 text-sm">Vignan University (2022-2026)</p>
                    <p className="text-white/80 text-sm">CGPA: 7.5</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Intermediate (MPC)</p>
                    <p className="text-white/80 text-sm">Narayana Junior College</p>
                    <p className="text-white/80 text-sm">96.1% (961/1000)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Python', icon: Code, color: 'text-yellow-400' },
              { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
              { name: 'Git&Github', icon: Code, color: 'text-blue-400' },
              { name: 'C', icon: Code, color: 'text-green-400' },
              { name: 'HTML/CSS', icon: Code, color: 'text-orange-400' },
              { name: 'SQL', icon: Code, color: 'text-blue-400' },
              { name: 'OOPS', icon: Code, color: 'text-blue-400' },
              { name: 'operating systems', icon: Code, color: 'text-blue-400' },
            ].map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-3`} />
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Google Cybersecurity Professional', org: 'Cisco', icon: Award },
                { name: 'Python Essentials', org: 'Cisco (Level 1 & 2)', icon: Award },
                { name: 'Networking Basics', org: 'Cisco', icon: Award },
                { name: 'Generative AI', org: 'Google Cloud', icon: Award },
                { name: 'Data structures and algorithms', org: 'Simpleilearn', icon: Award },
                 { name: 'Python', org: 'Hackerrank', icon: Award },
              ].map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <cert.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                  <p className="text-white/80 text-xs">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Facial Authentication System',
                description: 'Secure, contactless facial authentication for food ordering with 95% accuracy and <2 second login time.',
                tech: ['OpenCV', 'TensorFlow', 'Python', 'React', 'SQL'],
                features: ['Real-time authentication', 'Scalable architecture', 'University recognition']
              },
              {
  title: 'Personal Professional Portfolio Website',
  description: 'Responsive personal portfolio showcasing skills, projects, certifications, and achievements as a Cyber Security student, built with a clean and modern design.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  features: [
    'Responsive design for all devices',
    'Project and skills showcase',
    'Downloadable resume',
    'Contact form integration',
    'Smooth animations and transitions',
    'SEO-friendly structure'
  ]
},

              {
  title: 'Amazon Clone',
  description: 'E-commerce website UI replicating core Amazon features like product listing, search, and cart functionality.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  features: [
    'Product filtering and search',
    'Shopping cart functionality',
    'Responsive layout',
    'Dynamic DOM manipulation',
    'Flexbox-based product grid'
  ]
},
{
  title: 'AI Website Rebranding',
  description: 'Rebuilt and redesigned an AI website with modern UI/UX, integrated CMS, and improved performance.',
  tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Adobe Firefly', 'Durable'],
  features: [
    'Modern responsive UI design',
    'Firebase CMS integration',
    'Tailwind CSS for styling',
    'Optimized performance and SEO',
    'AI-assisted graphic generation'
  ]
}
            ].map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="text-white/80 text-xs space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-lg opacity-90 mb-8">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4" />
                  <a href="mailto:vardhanyadlapalli225@gmail.com" className="hover:underline">vardhanyadlapalli225@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4" />
                  <a href="tel:+918247439115" className="hover:underline">+91 8247439115</a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white backdrop-blur-sm" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white backdrop-blur-sm" 
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none backdrop-blur-sm" 
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm text-white py-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Vishnu Vardhan. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:vardhanyadlapalli225@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+918247439115" className="text-white/60 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
>>>>>>> bb5c19c (Initial commit: React portfolio with VS Code setup)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> bb5c19c (Initial commit: React portfolio with VS Code setup)
