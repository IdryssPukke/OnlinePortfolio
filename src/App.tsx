import { BrowserRouter } from "react-router-dom";
import { App as AntdApp} from "antd";

import { Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import { About } from "./components/About";
import SectionWrapper from "./components/SectionWrapper";

const AboutWrapper = SectionWrapper(About, "about")

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
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </AntdApp>
    </BrowserRouter>
  );
}

export default App;