import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import WandCursor from './components/WandCursor/WandCursor';
import LetterSection from './components/LetterSection/LetterSection';
import Footer from './components/Footer/Footer';
import Owl from './components/Owl/Owl';
import JourneySection from './components/JourneySection/JourneySection';
import SpellsSection from './components/SpellsSection/SpellsSection';
import SortingSection from './components/SortingSection/SortingSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <BackgroundMusic />
      <WandCursor />
      <Navbar />
      <Owl />
      <Hero />
      <LetterSection />
      <SortingSection />
      <SpellsSection />
      <JourneySection />
      <Footer />
    </>
  );
}

export default App;
