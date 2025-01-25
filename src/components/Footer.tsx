export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          © 2025 Joel Rojas - Todos los derechos reservados
        </p>
        <div className="flex justify-center mt-4">
          <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-500 transition duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-500 transition duration-300">
            GitHub
          </a>
          <a href="mailto:tu-email@example.com" className="mx-2 hover:text-yellow-500 transition duration-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
