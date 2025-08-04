import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import HeroSection from '@/components/HeroSection';
// pages/index.tsx atau pages/portfolio.tsx
import Head from 'next/head'


const Portfolio = () => {

  return (
    <>
      <Head>
        <title>Farhan Lamiran | Web Developer</title>
        <meta
          name="description"
          content="Portfolio website of Farhan Lamiran, a MERN stack developer."
        />
      </Head>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
    </>
  );
};

export default Portfolio;