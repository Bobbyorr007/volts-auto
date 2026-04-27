import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Fleet from "./components/Fleet";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#08090a] text-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Fleet />
        <Features />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
