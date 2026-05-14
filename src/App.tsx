
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CanvasContainer from './components/CanvasContainer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import WelcomeIntro from './components/WelcomeIntro';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <WelcomeIntro />
      <CustomCursor />
      <Header />

      {/* 3D Canvas Background */}
      <CanvasContainer />

      <main>
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Dedicated Skills Layout */}
        <SkillsSection />

        {/* Projects Section Grid */}
        <ProjectsSection />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Certifications Grid */}
        <CertificationsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
