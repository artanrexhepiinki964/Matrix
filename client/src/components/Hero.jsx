import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: 'url(/vite.svg)'}}>
      <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold mb-4">
          Elevate Your Digital Presence
        </motion.h1>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
