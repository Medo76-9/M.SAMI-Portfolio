import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import HeroSection from '../components/HeroSection';
import MarqueeText from '../components/MarqueeText';
import FeaturedWork from '../components/FeaturedWork';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import FooterSection from '../components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <MarqueeText />
        <FeaturedWork />
        <AboutPreview />
        <ServicesPreview />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
