import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="border p-4 rounded shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="mb-2">{service.description}</p>
      <p className="font-bold text-blue-600">${service.price}</p>
    </motion.div>
  );
}
