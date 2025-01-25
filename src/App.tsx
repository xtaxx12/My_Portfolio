import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <section id="about">Sobre mí</section>
        <section id="projects">Proyectos</section>
        <section id="contact">Contacto</section>
      </main>
      <Footer />
    </div>
  );
}
