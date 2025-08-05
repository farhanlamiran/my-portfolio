import React, { useState } from 'react';
import { IWebsiteProject, WEBSITE_DATA } from '@/data/websites';
import {Code } from 'lucide-react';
import ProjectGrid from './ProjectGrid';

const ProjectsSection = () => {

    const [websites] = useState<IWebsiteProject[]>(WEBSITE_DATA);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', ...Array.from(new Set(websites.map(w => w.category)))];

    const filteredWebsites = selectedCategory === 'All'
        ? websites
        : websites.filter(w => w.category === selectedCategory);
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="text-white/80">Featured Projects</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
                        My Recent Work
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A collection of projects that showcase my skills in full-stack development,
                        UI/UX design, and problem-solving.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectGrid projects={filteredWebsites} />
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection