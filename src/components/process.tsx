import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Konsultasi",
    description: "Diskusi kebutuhan dan tujuan bisnis Anda",
    duration: "1-2 hari",
  },
  {
    icon: Palette,
    title: "Desain & Planning",
    description: "Membuat mockup dan rencana pengembangan",
    duration: "3-5 hari",
  },
  {
    icon: Code,
    title: "Development",
    description: "Membangun website dengan teknologi terbaru",
    duration: "1-3 minggu",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Peluncuran dan dukungan teknis berkelanjutan",
    duration: "Ongoing",
  },
];

const Process = () => {
  return (
    <div id="process" className="py-20 px-6 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Proses Kerja Kami
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Proses yang transparan dan terstruktur untuk memastikan hasil terbaik
        </p>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Connecting line - ONLY visible on desktop */}
              <div className="absolute top-3 left-12 right-12 h-0.5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="w-full h-full bg-primary origin-left"
                  style={{ transformOrigin: "left center" }}
                />
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-20 mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-4"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300"
                    >
                      <step.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 relative"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 relative z-10"
                  >
                    {index + 1}
                  </motion.div>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Process;
