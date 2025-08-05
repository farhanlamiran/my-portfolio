import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
    category: string;
    date: string;
    technologies: string[];
}

interface ProjectGridProps {
    projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    return (
        <>

            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Overlay */}
                        <div className="bg-am absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                    {/* Info */}
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
        </>
    );
};

export default ProjectGrid;
