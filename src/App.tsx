import { BrowserRouter } from "react-router-dom";
import { App as AntdApp } from "antd";

import { Hero, Navbar, StarsCanvas } from "./components";

import { About } from "./components/About";
import SectionWrapper from "./components/SectionWrapper";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Tech } from "./components/Tech";
import { Works } from "./components/Works";

const AboutWrapper = SectionWrapper(About, "about");
const ContactWrapper = SectionWrapper(Contact, "contact");
const ExperienceWrapper = SectionWrapper(Experience, "experience");
const TechWrapper = SectionWrapper(Tech, "tech");
const WorksWrapper = SectionWrapper(Works, "work");

function App() {
  return (
    <BrowserRouter>
      <AntdApp style={{ width: "100%", height: "100%" }}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <AboutWrapper />
          <ExperienceWrapper />
          <TechWrapper />
          <WorksWrapper />
          <div className="relative z-0">
            <ContactWrapper />
            <StarsCanvas />
          </div>
        </div>
      </AntdApp>
    </BrowserRouter>
  );
}

export default App;
