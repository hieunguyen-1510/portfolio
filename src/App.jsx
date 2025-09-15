import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen text-slate-100 relative">
      <Starfield />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
