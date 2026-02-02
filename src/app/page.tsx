import { About, Contact, Experience, Hero, Projects, Publications } from './components';
import { Footer, Navbar, ScrollComponent } from './components/shared';

const Home = () => {
  return (
    <>
      <ScrollComponent />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
