import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Farhan Lamiran
          </div>

          <div className="text-white/60 text-sm">
            © 2024 Farhan Lamiran. All rights reserved.
          </div>

          <div className="text-white/40 text-sm">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer