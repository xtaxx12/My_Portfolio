

const AboutMe = () => {
  return (
    <section id="about" className="my-8 container mx-auto p-4">
      <h2 className="text-2xl font-bold">Sobre Mí</h2>
      <p>
        ¡Hola! Soy [Tu Nombre], un apasionado desarrollador web con sede en Machala, El Oro, Ecuador. Tengo una fuerte pasión por crear experiencias web atractivas y funcionales, y me encanta trabajar con tecnologías modernas como <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Angular</strong> y <strong>Material UI</strong>.
      </p>
      <h3 className="text-xl font-semibold mt-4">Mis Habilidades:</h3>
      <ul className="list-disc ml-5">
        <li><strong>Desarrollo Frontend:</strong> React, Angular, HTML, CSS, JavaScript, TypeScript</li>
        <li><strong>Estilizado:</strong> Tailwind CSS, Material UI, SCSS</li>
        <li><strong>Herramientas:</strong> Git, Vercel, Webpack, Vite, Node.js</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4">Experiencia:</h3>
      <p>
        Desarrollador Web en [Nombre de la Empresa], donde he trabajado en la creación de interfaces de usuario intuitivas y responsivas. También he participado en varios proyectos de código abierto y colaborativos.
      </p>
      <h3 className="text-xl font-semibold mt-4">Pasatiempos:</h3>
      <ul className="list-disc ml-5">
        <li><strong>Programación:</strong> Me encanta explorar nuevas tecnologías y contribuir a proyectos de código abierto.</li>
        <li><strong>Lectura:</strong> Disfruto leyendo sobre ciencia ficción y libros de desarrollo personal.</li>
        <li><strong>Viajes:</strong> Siempre estoy buscando nuevas aventuras y lugares para explorar.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4">Contáctame:</h3>
      <p>
        <strong>Email:</strong> <a href="mailto:tu-email@example.com">tu-email@example.com</a><br />
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tu-usuario">tu-linkedin</a><br />
        <strong>GitHub:</strong> <a href="https://github.com/tu-usuario">tu-github</a>
      </p>
    </section>
  );
};

export default AboutMe;
