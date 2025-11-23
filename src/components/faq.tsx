"use client";

import { useState } from "react";
import {
  Clock,
  Code2,
  FileImage,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faq = [
  {
    icon: Clock,
    question: "Berapa lama waktu pengerjaan proyek?",
    answer:
      "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website landing page biasanya 2-3 minggu, website lengkap 3-4 minggu, dan proyek custom 4-6 minggu. Kami akan memberikan timeline detail setelah diskusi kebutuhan.",
  },
  {
    icon: Code2,
    question: "Apakah website bisa dikelola sendiri setelah selesai?",
    answer:
      "Ya, kami menggunakan platform yang mudah dikelola dan akan memberikan training dasar. Untuk proyek Enterprise, kami menyertakan training lengkap untuk tim Anda. Kami juga menyediakan layanan maintenance jika diperlukan.",
  },
  {
    icon: FileImage,
    question: "Apakah saya bisa request revisi desain?",
    answer:
      "Tentu! Setiap paket mencakup revisi desain sesuai kebutuhan. Kami akan bekerja sama dengan Anda sampai hasilnya sesuai dengan visi dan kebutuhan bisnis Anda.",
  },
  {
    icon: ShieldCheck,
    question: "Bagaimana dengan jaminan kualitas dan support?",
    answer:
      "Semua paket mencakup dukungan teknis untuk periode tertentu (1-6 bulan tergantung paket). Kami menjamin kualitas pekerjaan dan akan memperbaiki bug atau masalah teknis tanpa biaya tambahan selama periode support aktif.",
  },
  {
    icon: HelpCircle,
    question: "Apakah paket sudah termasuk domain dan hosting?",
    answer:
      "Ya, semua paket website sudah termasuk setup domain dan hosting untuk 1 tahun pertama. Kami akan membantu proses pembelian dan konfigurasinya. Setelah tahun pertama, Anda bisa memperpanjang sendiri atau tetap menggunakan layanan kami.",
  },
  {
    icon: MessageCircle,
    question: "Bagaimana cara menghubungi untuk konsultasi?",
    answer:
      "Anda bisa menghubungi kami melalui tombol 'Hubungi Kami' di website ini, atau langsung klik tombol CTA yang tersedia. Kami akan merespons dalam 1x24 jam untuk diskusi kebutuhan dan memberikan penawaran yang sesuai.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20 scroll-mt-20"
    >
      <div className="max-w-screen-lg w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center"
        >
          Pertanyaan yang Sering Diajukan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 xs:text-lg text-center text-muted-foreground"
        >
          Jawaban cepat untuk pertanyaan umum tentang layanan dan produk kami.
        </motion.p>

        <div className="mt-12 space-y-4">
          {faq.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border rounded-xl overflow-hidden bg-background hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-start justify-between text-left gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent shrink-0">
                    <item.icon className="h-4 w-4 xs:h-6 xs:w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                      {item.question}
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-sm xs:text-base text-muted-foreground overflow-hidden"
                        >
                          {item.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
