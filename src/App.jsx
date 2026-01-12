import "./App.css";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LeadFeatures from "./components/LeadFeatures";
import LeadsHero from "./components/LeadsHero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import TrustedBy from "./components/TrustedBy";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div>
      <Navbar />
      <LeadsHero />
      <TrustedBy />
      <WhatsAppFloat />
      <LeadFeatures />
      <TechStack />
      <CaseStudies />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
