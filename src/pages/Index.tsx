import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hitansh Jain | AI Enthusiast & Efficiency Expert</title>
        <meta
          name="description"
          content="Portfolio of Hitansh Jain - Real-World Ideas, AI Execution. Connecting complex problems with smart AI solutions. Based in Udaipur, Rajasthan."
        />
        <meta name="keywords" content="Hitansh Jain, AI, Portfolio, Udaipur, Prompt Engineering, AI Agent" />
      </Helmet>
      
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <CertificationsSection />
        <SkillsSection />
        <ProjectSection />
        <ResumeSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
