import ContactSection from '@/components/sections/ContactSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import HeroSection from '@/components/sections/HeroSection';
import DefaultLayout from '@/components/layout/DefaultLayout';
import CustomHead from '@/components/layout/CustomHead';

const Portfolio = () => {
  return (
    <DefaultLayout>
      <CustomHead/>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </DefaultLayout>
  )
};

export default Portfolio;