import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPenNib,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Services: React.FC = () => {
  return (
    <section
      id="layanan"
      className="py-16 bg-gradient-to-b from-orange-100 via-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Layanan Kami
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Kami membantu brand Anda tampil standout melalui layanan
            profesional.
          </p>
        </motion.div>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 text-4xl">
              <FontAwesomeIcon icon={faPenNib} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Desain Grafis
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Logo, branding, kemasan, poster, feed Instagram, dan kebutuhan
              visual lainnya.
            </p>
            <a
              href="#contact"
              className="text-orange-500 text-sm font-medium inline-flex items-center hover:underline"
            >
              Gratis Konsultasi!{" "}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-xs" />
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100 text-blue-500 text-4xl">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Website
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Landing page, undangan digital, toko online, website portfolio,
              dan lainnya.
            </p>
            <a
              href="#contact"
              className="text-blue-500 text-sm font-medium inline-flex items-center hover:underline"
            >
              Kami Bantu Hosting!{" "}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-xs" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
