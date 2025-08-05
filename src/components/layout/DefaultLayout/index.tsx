import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
  )
}

export default DefaultLayout