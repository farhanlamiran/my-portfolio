'use client'

import React, { useState } from 'react';
import { WEBSITE_DATA } from '@/data/websites';
import { ExternalLink, Calendar, Code } from 'lucide-react';

const ProjectsSection = () => {

    const [websites] = useState(WEBSITE_DATA);
    const [selectedCategory, setSelectedCategory] = useState('All');
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
                    {filteredWebsites.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={() => window.open(project.url, '_blank')}
                                        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </button>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-white/40 text-sm">
                                        <Calendar className="w-3 h-3" />
                                        <span>{project.date}</span>
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-lg border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection