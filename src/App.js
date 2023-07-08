import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import { SiteInitialSection } from "./Components/SiteInitialSection";
import { TestimonialsSection } from "./Components/TestimonialsSection";
import { Navigation } from "./Resuables/Navigation";
import { ProjectsSection } from "./Components/ProjectsSection";
import { CoreValues } from "./Components/CoreValues";
import "../src/Styles/HeroSectionStyles.css";
import "../src/Styles/TestimonialStyles.css";
import "../src/Styles/Navigation.css";
import "../src/Styles/Projects.css";
import "../src/Styles/CoreValues.css";
import "../src/Styles/SiteInitial.css";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <SiteInitialSection/>
      <HeroSection/>
      <TestimonialsSection/>
      <ProjectsSection/>
      <CoreValues/>
    </div>
  );
}

export default App;
