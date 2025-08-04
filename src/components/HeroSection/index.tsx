import React from 'react'
import { Download, Sparkles, ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Profile Image */}
                <div className="relative mb-8 inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white/20">
                        <img
                            src="/farhan.jpg"
                            alt="Farhan Lamiran"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-white/80 text-sm">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                            Farhan Lamiran
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-white/60 mb-8">
                        <span className="inline-block">Full Stack Developer</span>
                        <span className="mx-4 text-white/30">•</span>
                        <span className="inline-block">UI/UX Enthusiast</span>
                    </div>

                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
                        I craft exceptional digital experiences through clean code and thoughtful design.
                        Passionate about building applications that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                            <a href="#projects" className="group inline-flex items-center gap-2 text-white hover:no-underline">
                                <span>
                                    View My Work
                                </span>
                            </a>
                        </button>

                        <button className="group px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            <a
                                href="/CV_FARHAN_LAMIRAN_data.pdf"
                                download
                                className="inline-flex items-center gap-2 text-white hover:no-underline"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-white/60" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection