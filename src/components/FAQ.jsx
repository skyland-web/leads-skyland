import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, Mail } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by scope. A simple landing page can take 1-2 weeks, while a full SaaS platform might take 8-12 weeks. We provide a detailed timeline during the discovery phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We offer monthly maintenance packages that include server monitoring, bug fixes, and minor content updates to keep your product running smoothly."
  },
  {
    question: "What is your pricing model?",
    answer: "We typically work on a project-based fixed price or a monthly retainer for ongoing development. Contact us for a custom quote based on your needs."
  },
  {
    question: "Will I own the code?",
    answer: "Absolutely. Once the project is paid in full, you own 100% of the intellectual property and source code. No vendor lock-in."
  },
  {
    question: "Can you help with existing codebases?",
    answer: "Yes, we specialize in code audits and refactoring. We can take over legacy projects, modernize the stack, and improve performance."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Got questions? <br />
            <span className="text-purple-600">We've got answers.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Everything you need to know about our process, pricing, and deliverables.
          </motion.p>
        </div>
        
        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-purple-50/50 border-purple-200 shadow-lg shadow-purple-500/5" 
                    : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors ${
                    isOpen ? "text-purple-900" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                    isOpen ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600"
                  }`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-purple-100/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default FAQ;