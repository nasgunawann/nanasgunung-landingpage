import { Code2, FileImage, Camera, Smartphone, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "Website Profesional",
    description:
      "Website responsif dan modern yang dirancang khusus untuk kebutuhan bisnis Anda, dengan performa cepat dan SEO yang optimal.",
  },
  {
    icon: FileImage,
    title: "Desain Grafis Berkualitas",
    description:
      "Logo, poster, dan material branding yang menarik dan profesional untuk memperkuat identitas visual bisnis Anda.",
  },
  {
    icon: Camera,
    title: "Konten Kreatif",
    description:
      "Produksi foto, video, dan konten media sosial yang engaging untuk meningkatkan engagement dan jangkauan bisnis Anda.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Semua desain dan website kami dioptimalkan untuk perangkat mobile, memastikan pengalaman terbaik di semua ukuran layar.",
  },
  {
    icon: Zap,
    title: "Pengiriman Cepat",
    description:
      "Kami berkomitmen menyelesaikan proyek tepat waktu tanpa mengorbankan kualitas hasil kerja.",
  },
  {
    icon: Users,
    title: "Kolaborasi Mudah",
    description:
      "Proses komunikasi yang transparan dengan update berkala, memastikan proyek sesuai dengan visi Anda.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center"
      >
        Mengapa Pilih Kami?
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col bg-background border rounded-xl py-6 px-5 
                       hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <div
              className="mb-3 h-10 w-10 flex items-center justify-center 
                          bg-muted rounded-full group-hover:bg-primary/10 
                          transition-colors"
            >
              <feature.icon className="h-6 w-6 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
