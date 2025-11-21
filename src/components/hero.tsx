import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FileImage, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import previewImage from "/images/preview.png";

const Hero = () => {
  const benefits = ["50+ Proyek Selesai", "Tim Profesional", "Support 24/7"];
  const rotatingWords = [
    "Bisnismu",
    "Proyekmu",
    "Tugasmu",
    "Portofolimu",
    "Idemu",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-20 md:py-32 px-6 relative overflow-hidden min-h-[90vh] pb-32 scroll-mt-20"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 relative z-10">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-left space-y-8"
        >
          {/* Main heading with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-balance tracking-tight leading-tight text-5xl md:text-7xl font-bold pt-12 md:pt-0"
          >
            Bantu Buat Website untuk{" "}
            <span className="relative inline-block min-w-[280px] md:min-w-[420px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 1, ease: "anticipate" }}
                  className="relative inline-block"
                >
                  <span className="bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold">
                    {rotatingWords[currentWordIndex]}
                  </span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent blur-lg opacity-50 pointer-events-none">
                    {rotatingWords[currentWordIndex]}
                  </span>
                  {/* Underline - positioned relative to the word */}
                  <motion.span
                    className="absolute -bottom-5 left-0 h-3 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "anticipate" }}
                  />
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-foreground/80 max-w-xl leading-relaxed"
          >
            Kami menyediakan jasa membangun website profesional untuk tujuan
            bisnis, personal, dan akademik.
          </motion.p>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base group relative overflow-hidden cursor-pointer hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/62881082469420?text=Halo! Saya tertarik dengan layanan website untuk bisnis saya. Bisa konsultasi?",
                  "_blank"
                )
              }
            >
              <span className="relative z-10 flex items-center gap-2">
                Hubungi Kami
                <ArrowUpRight className="!h-5 !w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none hover:bg-primary/5 hover:border-primary/50 cursor-pointer hover:cursor-pointer"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Visual element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          {/* Main visual container */}
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
            {/* Mock browser window or device mockup */}
            <div className="bg-background rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-muted h-12 flex items-center gap-2 px-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background overflow-hidden">
                <img
                  src={previewImage}
                  alt="Website Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-20 -left-10 bg-primary/10 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 shadow-lg"
          >
            <FileImage className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 -right-10 bg-primary/10 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 shadow-lg"
          >
            <Camera className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
