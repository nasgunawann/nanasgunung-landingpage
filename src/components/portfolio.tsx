import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
// import noImage from "/images/logo-light.png";
import planner from "/images/planner.png";
import masjid from "/images/masjid.png";
import nanaslab from "/images/nanaslab.png";
import gamestore from "/images/gamestore.png";
import portalsia from "/images/portalsia.png";
import simagang from "/images/simagang.png";

const portfolioItems = [
  {
    title: "Content Planner",
    category: "Web Application",
    description:
      "Platform perencanaan konten dengan AI chatbot untuk referensi caption dan ide kreatif, membantu content creator dan UMKM mensinkronkan strategi marketing media sosial.",
    image: planner,
  },
  {
    title: "Website Masjid Modern",
    category: "Web Development",
    description:
      "Website masjid modern dengan jadwal program, profil masjid, dan update kegiatan komunitas",
    image: masjid,
  },
  {
    title: "Portfolio Personal",
    category: "Landing Page",
    description:
      "Landing page personal untuk menampilkan portfolio dan karya-karya terbaik pribadi",
    image: nanaslab,
  },
  {
    title: "Game Store",
    category: "E-commerce",
    description:
      "Toko online untuk top up game dengan berbagai metode pembayaran dan proses otomatis",
    image: gamestore,
  },
  {
    title: "Portal SIA",
    category: "Web Application",
    description:
      "Sistem Informasi Akademik (SIAKAD) untuk universitas dengan manajemen mahasiswa dan nilai",
    image: portalsia,
  },
  {
    title: "Sistem Magang",
    category: "Web Application",
    description:
      "Website magang dimana pengguna dapat mendaftar dan admin dapat melihat serta mengelola data",
    image: simagang,
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-20 px-6 bg-muted/30 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Portfolio Kami
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lihat beberapa proyek yang telah kami selesaikan untuk klien kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-background border hover:shadow-lg transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
