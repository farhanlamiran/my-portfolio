import React from 'react'
import { Star } from 'lucide-react';
import { SKILL } from '@/data/skills'

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-white/80">Technical Skills</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
                        Technologies I Use
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {SKILL.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-lg">
                                    {React.createElement(skill.icon, { className: "text-white w-6 h-6" })}
                                </span>
                            </div>
                            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection