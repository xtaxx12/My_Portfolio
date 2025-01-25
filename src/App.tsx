import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/aboutMe"; // Importa el componente AboutMe

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container mx-auto p-4">
        <AboutMe />
        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <p>Listado de proyectos.</p>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p>Información de contacto.</p>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
