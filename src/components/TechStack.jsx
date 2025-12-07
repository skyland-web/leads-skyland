import { motion } from "framer-motion";
import { Database, Layout, Server, Cpu, Globe, Lock } from "lucide-react";

const techs = [
  { icon: Layout, name: "Frontend", details: "React, Next.js, Tailwind" },
  { icon: Server, name: "Backend", details: "Node.js, Python, Go" },
  { icon: Database, name: "Database", details: "PostgreSQL, Mongo, Redis" },
  { icon: Cpu, name: "DevOps", details: "Docker, AWS, CI/CD" },
  { icon: Globe, name: "CMS", details: "Sanity, Strapi, WordPress" },
  { icon: Lock, name: "Security", details: "OAuth, JWT, Compliance" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built with <span className="text-purple-600">modern technologies.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We choose the right tools for the job. Our stack ensures your product is fast, scalable, and easy to maintain for years to come.
            </p>
            <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              View Full Stack
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-100 bg-white hover:border-purple-100 hover:shadow-sm transition-all flex items-start space-x-4"
              >
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                  <tech.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tech.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;