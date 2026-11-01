import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Articles from "./components/Articles";
import Contact from "./components/Contact"; // <--- Import Final

function App() {
  return (
    // Tambahkan class 'scroll-smooth' agar saat klik navbar, scroll-nya halus
    <div className="bg-dark min-h-screen text-light font-sans selection:bg-primary selection:text-white scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Articles />
        <Contact /> {/* <--- Finish Line! */}
      </main>
    </div>
  );
}

export default App;