import Hero from '../components/Hero/Hero';
import ServiceHighlights from '../components/ServiceHighlights/ServiceHighlights';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ServicesDetail from '../components/ServicesDetail/ServicesDetail';
import About from '../components/About/About';
import ServiceAreas from '../components/ServiceAreas/ServiceAreas';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <ServicesDetail />
      <About />
      <ServiceAreas />
      <Reviews />
    </>
  );
}
