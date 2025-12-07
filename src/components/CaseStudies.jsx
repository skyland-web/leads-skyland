import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "FinFlow",
    category: "Fintech SaaS",
    result: "240% Increase in Leads",
    desc: "Redesigned the onboarding flow to reduce friction and improve conversion rates.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    client: "HealthEase",
    category: "Healthcare App",
    result: "50k+ Active Users",
    desc: "Built a scalable patient management system with real-time appointment syncing.",
    color: "bg-green-50 text-green-600"
  },
  {
    client: "MarketMinds",
    category: "E-commerce",
    result: "3x ROAS Scaling",
    desc: "Developed a custom analytics dashboard to track ad performance across channels.",
    color: "bg-purple-50 text-purple-600"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real results for <span className="text-purple-600">real business.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just ship code; we ship business outcomes. Here is how we've helped others.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${item.color}`}>
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.client}</h3>
                <h4 className="text-xl font-semibold text-purple-600 mb-4">{item.result}</h4>
                <p className="text-gray-600 mb-6">{item.desc}</p>
              </div>
              <button className="flex items-center text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors group">
                Read Case Study 
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;