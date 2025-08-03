// pages/index.tsx
import { useState } from 'react';
import { ExternalLink, Globe, Calendar, Mail, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface Website {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  date: string;
}

const Portfolio = () => {
  const [websites] = useState<Website[]>([
    {
      id: '1',
      title: 'netflix clone',
      description: 'Modern e-commerce platform dengan fitur lengkap untuk online shopping',
      url: 'https://faanglix.netlify.app/',
      imageUrl: '/PreviewImage/netflix_clone.png',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Web App',
      date: '2025-05'
    },
    {
      id: '2',
      title: 'Image model dashboard',
      description: 'Dashboard untuk monitoring dan analytics dengan real-time data visualization',
      url: 'teachable-with-arduino.netlify.app',
      imageUrl: '/PreviewImage/tm.png',
      technologies: ['Javascript', 'HTML', 'CSS', 'Tensorflow.js'],
      category: 'Dashboard',
      date: '2025-04'
    },
    {
      id: '3',
      title: 'Landing Page Design',
      description: 'Creative landing page dengan animasi yang menarik dan responsive design',
      url: 'https://example-landing.com',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: 'Landing Page',
      date: '2023-11'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(websites.map(w => w.category)))];

  const filteredWebsites = selectedCategory === 'All'
    ? websites
    : websites.filter(w => w.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/farhan.jpg"
              alt="Farhan Lamiran"
              className="w-18 h-18 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Farhan Lamiran</h1>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 max-w-2xl">
            The gallery below showcases some of my recent projects.
            Feel free to reach out via email if you&#39;re interested in collaborating, learning more, or discussing new opportunities
          </p>

          <div className="flex gap-4">
            <a href="mailto:farhanlamiran@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              farhanlamiran@gmail.com
            </a>
            <a href="https://github.com/farhanlamiran" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/farhan-lamiran" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Portfolio Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">My Portfolio</h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {filteredWebsites.map(website => (
              <div
                key={website.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => window.open(website.url, '_blank')}
              >
                {/* Preview Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <Image
                    src={website.imageUrl}
                    alt={website.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-transparant bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {website.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {website.date}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {website.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {website.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {website.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-12">
              <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No projects found for this category.</p>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="mt-16 bg-white rounded-xl border border-gray-200 p-8">
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind', 'MongoDB'].map(skill => (
                <div key={skill} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600">
            © 2025 Farhan lamiran
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;