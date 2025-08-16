import React from "react";
import { motion } from "framer-motion";
import Illustration from "../assets/illustration.png";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden snap-start text-orange-950"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left */}
        <motion.div
          className="space-y-8 max-w-xl md:max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Kami adalah <br></br>
            <span className="bg-orange-500 text-white px-2 py-2 -skew-x-6 inline-block text-4xl md:text-7xl">
              Nanasgunung
            </span>{" "}
            Creative Studio
          </h2>

          <p className="text-xl md:text-2xl font-light">
            Kami menyediakan jasa desain grafis, website, dan konten kreatif
            untuk semuanya.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span>Mulai bersama kami</span>
            <i className="fas fa-angle-right"></i>
          </motion.a>
        </motion.div>

        {/* Right */}
        <motion.div
          className="mt-10 md:mt-0 md:ml-12 flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={Illustration}
            alt="Ilustrasi Desain"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
      {/* Divider wave di bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M0,0V46.29c47.87,22,103.78,29,158,16,70.41-17.09,136.6-63.57,207-78C518,1,591,36,661,53c52.22,13,104.74,9,156-8,60-20,113.17-55,173-60,66-5.56,133,21,200,39V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
