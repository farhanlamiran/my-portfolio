import React from 'react'
import {Mail, Github, Linkedin} from 'lucide-react';

const ContactSection = () => {
  return (
      <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                  <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Get In Touch</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
                      Let&apos;s Work Together
                  </h2>

                  <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                      I&apos;m always interested in new opportunities and exciting projects.
                      Feel free to reach out if you&apos;d like to collaborate or just say hello!
                  </p>

                  {/* Contact Links */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <a
                          href="mailto:farhanlamiran@gmail.com"
                          className="group flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 px-8 py-4 rounded-full text-white font-semibold shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105"
                      >
                          <Mail className="w-5 h-5" />
                          <span>Send Email</span>
                      </a>

                      <div className="flex gap-4">
                          <a
                              href="https://github.com/farhanlamiran"
                              className="group p-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
                          >
                              <Github className="w-6 h-6 text-white" />
                          </a>
                          <a
                              href="https://linkedin.com/in/farhan-lamiran"
                              className="group p-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
                          >
                              <Linkedin className="w-6 h-6 text-white" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default ContactSection