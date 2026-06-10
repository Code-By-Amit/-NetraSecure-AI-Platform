import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import Features from '../components/sections/Features';
import WhyChoose from '../components/sections/WhyChoose';
import Showcase from '../components/sections/Showcase';
import HowItWorks from '../components/sections/HowItWorks';
import TrustSecurity from '../components/sections/TrustSecurity';
import UrlScanner from '../components/sections/UrlScanner';
import ContactForm from '../components/sections/ContactForm';
import Testimonials from '../components/sections/Testimonials';
import FinalCta from '../components/sections/FinalCta';

export default function HomePage() {
  return (
    <div className="fade-in">
      <Hero />
      <Intro />
      <Features />
      <WhyChoose />
      <Showcase />
      <HowItWorks />
      <TrustSecurity />
      <UrlScanner />
      <ContactForm />
      <Testimonials />
      <FinalCta />
    </div>
  );
}