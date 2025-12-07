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

function App() {
  return (
    <div>
      <Navbar />
      <LeadsHero />
      <TrustedBy />
      <LeadFeatures />
      <TechStack />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
