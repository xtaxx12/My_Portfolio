import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-4"
    >
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Joel Rojas</h1>
        <ul className="flex gap-4">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}
