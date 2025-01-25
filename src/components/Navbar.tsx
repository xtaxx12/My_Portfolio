import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Joel Rojas</h1>
        <ul className="flex gap-8 text-lg">
          <li>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-yellow-500 transition duration-300"
            >
              Sobre mí
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-yellow-500 transition duration-300"
            >
              Proyectos
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-yellow-500 transition duration-300"
            >
              Contacto
            </motion.a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
