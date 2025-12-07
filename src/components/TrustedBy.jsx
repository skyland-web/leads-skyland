import { motion } from "framer-motion";

const brands = [
  "Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxHub", "Circle", "Astro"
];

const TrustedBy = () => {
  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Trusted by innovative teams worldwide
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex space-x-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-2xl font-bold text-gray-300 hover:text-purple-600 transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;