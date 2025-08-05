import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
  )
}

export default DefaultLayout