import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import { TestimonialsSection } from "./Components/TestimonialsSection";
import { Navigation } from "./Resuables/Navigation";
import { ProjectsSection } from "./Components/ProjectsSection";
import "../src/Styles/HeroSectionStyles.css";
import "../src/Styles/TestimonialStyles.css";
import "../src/Styles/Navigation.css";
import "../src/Styles/Projects.css";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <TestimonialsSection/>
      <ProjectsSection/>
    </div>
  );
}

export default App;
