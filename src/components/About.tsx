import React from "react";
import { motion } from "framer-motion";
import LogoText from "../assets/logotext.png";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-12 snap-start"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-0 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Logo kiri */}
        <motion.div
          className="flex-1 order-0 md:order-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={LogoText}
            alt="Tentang Kami"
            className="w-full max-w-md rounded-3xl shadow-lg mx-auto"
          />
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          className="flex-1 order-1 md:order-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nanasgunung Creative Studio adalah tim yang menyediakan jasa desain
            grafis, dan pembuatan website. Kami percaya desain tidak harus
            cantik saja, tapi juga bisa membantu kamu memberi cerita.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dengan pengalaman dan dedikasi, kami selalu menghadirkan solusi
            kreatif sesuai kebutuhan klien, dari pribadi, UMKM hingga perusahaan
            besar.
          </p>

          <a
            href="#portfolio"
            className="inline-block bg-green-500 text-white text-xl font-semibold py-4 px-6 rounded-full shadow-md hover:bg-white hover:text-green-500 transition"
          >
            Lihat Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
