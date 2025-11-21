import { ArrowUpRight, Forward, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <div id="cta" className="px-6 scroll-mt-52">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden my-20 w-full max-w-screen-lg mx-auto rounded-3xl"
      >
        {/* Orange gradient background using primary color */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, 
              oklch(0.7 0.17 60), 
              oklch(0.75 0.17 60), 
              oklch(0.68 0.17 60))`,
          }}
        />

        {/* Animated orange blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "oklch(0.75 0.17 60 / 0.3)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "oklch(0.75 0.17 60 / 0.2)" }}
        />

        {/* Content */}
        <div className="relative z-10 py-12 md:py-16 px-6 md:px-14">
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              Siap Meningkatkan{" "}
              <span className="relative inline-block">
                Bisnis Anda?
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-white rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/90 max-w-2xl"
            >
              Mari diskusikan kebutuhan website, desain grafis, atau konten
              kreatif untuk bisnis Anda. Hubungi kami hari ini dan mulai
              transformasi digital bisnis Anda!
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-white/80 text-sm"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Gratis Konsultasi</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Respon Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Harga Terjangkau</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 rounded-full text-base font-semibold group shadow-xl hover:shadow-2xl transition-all"
                style={{ color: "oklch(0.75 0.17 60)" }}
              >
                Hubungi Kami
                <ArrowUpRight className="!h-5 !w-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full text-base font-semibold"
              >
                Lihat Portfolio
                <Forward className="!h-5 !w-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
