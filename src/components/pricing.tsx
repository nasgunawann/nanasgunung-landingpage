"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const businessPlans = [
  {
    name: "Paket Dasar",
    price: "Mulai dari",
    priceAmount: "Rp 1.5JT",
    description:
      "Solusi ideal untuk bisnis kecil yang ingin mulai memiliki website profesional.",
    features: [
      { title: "Website landing page (1-3 halaman)" },
      { title: "Desain responsif (mobile-friendly)" },
      { title: "Setup domain & hosting 1 tahun" },
      { title: "Dukungan teknis 1 bulan" },
      { title: "Waktu pengerjaan 2-3 minggu" },
    ],
    buttonText: "Mulai dikenal secara digital",
  },
  {
    name: "Paket Professional",
    price: "Mulai dari",
    priceAmount: "Rp 5JT",
    isRecommended: true,
    description:
      "Paket lengkap untuk bisnis yang membutuhkan website lengkap dengan fitur bisnis.",
    features: [
      { title: "Website hingga 10 halaman" },
      { title: "Integrasi form kontak & WhatsApp" },
      { title: "Desain custom & branding" },
      { title: "SEO dasar" },
      { title: "Setup domain & hosting 1 tahun" },
      { title: "Dukungan teknis 3 bulan" },
      { title: "Waktu pengerjaan 3-4 minggu" },
    ],
    buttonText: "Bangun Website Bisnis Sekarang",
    isPopular: true,
  },
  {
    name: "Paket Enterprise",
    price: "Mulai dari",
    priceAmount: "Rp 10JT",
    description:
      "Solusi komprehensif dengan fitur custom dan dukungan penuh untuk kebutuhan bisnis besar.",
    features: [
      { title: "Website unlimited halaman" },
      { title: "Sistem admin panel custom" },
      { title: "Integrasi payment gateway" },
      { title: "SEO advanced & optimasi performa" },
      { title: "Training untuk tim Anda" },
      { title: "Setup domain & hosting 1 tahun" },
      { title: "Dukungan teknis 6 bulan" },
      { title: "Waktu pengerjaan 4-6 minggu" },
    ],
    buttonText: "Konsultasi Kebutuhan Custom",
  },
];

const personalPlans = [
  {
    name: "Paket Personal",
    price: "Mulai dari",
    priceAmount: "Rp 500K",
    description:
      "Halaman untuk biodata, profil, CV, atau website personal Anda.",
    features: [
      { title: "Website 1-5 halaman" },
      { title: "Template website modern" },
      { title: "Galeri foto/karya" },
      { title: "Form kontak sederhana" },
      { title: "Hosting gratis 1 tahun" },
      { title: "Waktu pengerjaan 3-5 hari" },
      { title: "Revisi 3x" },
    ],
    buttonText: "Buat Portfolio Personal",
  },
  {
    name: "Paket Creator Personal",
    price: "Mulai dari",
    priceAmount: "Rp 1.5JT",
    isRecommended: true,
    description:
      "Website profesional untuk menampilkan karya, portfolio, dan profil kreator.",
    features: [
      { title: "Website 5–8 halaman" },
      { title: "Desain custom sesuai branding pribadi" },
      { title: "Galeri karya (foto, ilustrasi, video, music embed, dsb.)" },
      { title: "Form kontak email + WhatsApp" },
      { title: "Link sosial media (Instagram, Tiktok, dll.)" },
      { title: "Hosting + domain gratis 1 tahun" },
      { title: "SEO dasar untuk personal branding" },
      { title: "Waktu pengerjaan 1-2 Minggu" },
      { title: "Revisi 5x" },
    ],
    buttonText: "Bangun Branding Anda",
    isPopular: true,
  },
  {
    name: "Undangan Digital",
    price: "Mulai dari",
    priceAmount: "Rp 100K",
    description:
      "Paket desain untuk berbagai kebutuhan personal dan acara spesial.",
    features: [
      { title: "Desain modern dan menarik (Boleh request desain)" },
      { title: "Informasi acara lengkap + lokasi Google Maps" },
      { title: "Countdown timer" },
      { title: "Galeri foto" },
      { title: "Revisi 3x" },
      { title: "GRATIS Hosting" },
      { title: "Waktu pengerjaan 1-3 hari" },
    ],
    buttonText: "Pesan Undangan Digital",
  },
];

const academicPlans = [
  {
    name: "Tugas Website",
    price: "Mulai dari",
    priceAmount: "Rp 100K",
    description: "Bantuan pembuatan website untuk tugas kuliah atau sekolah.",
    features: [
      { title: "Website sesuai kebutuhan tugas" },
      { title: "Source code lengkap + dokumentasi" },
      { title: "Penjelasan code (PDF)" },
      { title: "Revisi 2x" },
      { title: "Waktu pengerjaan 1-2 hari" },
    ],
    buttonText: "Selesaikan Tugas Sekarang",
  },
  {
    name: "Skripsi/Thesis Website",
    price: "Mulai dari",
    priceAmount: "Rp 800K",
    isRecommended: true,
    description:
      "Website lengkap untuk penelitian skripsi atau thesis dengan dokumentasi professional.",
    features: [
      { title: "Website sesuai spesifikasi penelitian" },
      { title: "Database integration (MySQL/PostgreSQL)" },
      { title: "Admin panel untuk CRUD data" },
      { title: "Responsive design modern" },
      { title: "Source code + dokumentasi lengkap" },
      { title: "Revisi unlimited" },
      { title: "Konsultasi teknis" },
      { title: "Waktu pengerjaan 2-3 minggu" },
    ],
    buttonText: "Konsultasi Skripsi",
    isPopular: true,
  },
  {
    name: "PKL/Magang Website",
    price: "Mulai dari",
    priceAmount: "Rp 300K",
    description: "Website project untuk kebutuhan laporan PKL atau magang.",
    features: [
      { title: "Website multi-page dengan fitur lengkap" },
      { title: "User authentication & authorization" },
      { title: "Dashboard sederhana" },
      { title: "Source code + dokumentasi teknis" },
      { title: "Presentasi project" },
      { title: "Revisi unlimited" },
      { title: "Waktu pengerjaan 1 minggu" },
    ],
    buttonText: "Mulai Project",
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 xs:py-20 px-6 scroll-mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight"
      >
        Paket & Harga
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-center text-muted-foreground max-w-2xl"
      >
        Pilihan paket untuk kebutuhan bisnis maupun personal dengan harga yang
        terjangkau.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-12 max-w-screen-xl mx-auto w-full"
      >
        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto bg-muted relative">
            <TabsTrigger
              value="business"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 transform data-[state=active]:scale-105"
            >
              Bisnis
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 transform data-[state=active]:scale-105"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="academic"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 transform data-[state=active]:scale-105"
            >
              Akademik
            </TabsTrigger>
          </TabsList>

          <TabsContent value="business" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
              {businessPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={cn(
                    "relative border rounded-xl p-6 bg-background/50 transition-all duration-300",
                    {
                      "border-2 border-primary bg-gradient-to-br from-primary/5 to-background shadow-lg":
                        plan.isPopular,
                      "hover:shadow-md hover:border-primary/50":
                        !plan.isPopular,
                    }
                  )}
                >
                  {plan.isPopular && (
                    <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                      Paling Populer
                    </Badge>
                  )}
                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.price}
                  </p>
                  <p className="text-4xl font-bold">{plan.priceAmount}</p>
                  <p className="mt-4 font-medium text-muted-foreground">
                    {plan.description}
                  </p>

                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    size="lg"
                    className="w-full mt-6 text-base cursor-pointer hover:cursor-pointer"
                    onClick={() => {
                      const messages = {
                        "Hubungi untuk Konsultasi":
                          "Halo! Saya tertarik dengan Paket Dasar untuk website bisnis saya. Bisa konsultasi lebih lanjut?",
                        "Mulai Proyek Anda":
                          "Halo! Saya ingin memulai proyek website dengan Paket Professional. Bisa diskusi kebutuhan saya?",
                        "Konsultasi Kebutuhan Custom":
                          "Halo! Saya membutuhkan solusi website enterprise dengan fitur custom. Bisa konsultasi?",
                      };
                      const message =
                        messages[plan.buttonText as keyof typeof messages];
                      window.open(
                        `https://wa.me/62881082469420?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                  <Separator className="my-8" />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-start gap-2"
                      >
                        <CircleCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
              {personalPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={cn(
                    "relative border rounded-xl p-6 bg-background/50 transition-all duration-300",
                    {
                      "border-2 border-primary bg-gradient-to-br from-primary/5 to-background shadow-lg":
                        plan.isPopular,
                      "hover:shadow-md hover:border-primary/50":
                        !plan.isPopular,
                    }
                  )}
                >
                  {plan.isPopular && (
                    <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                      Paling Populer
                    </Badge>
                  )}
                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.price}
                  </p>
                  <p className="text-4xl font-bold">{plan.priceAmount}</p>
                  <p className="mt-4 font-medium text-muted-foreground">
                    {plan.description}
                  </p>

                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    size="lg"
                    className="w-full mt-6 text-base cursor-pointer hover:cursor-pointer"
                    onClick={() => {
                      const messages = {
                        "Pesan Sekarang":
                          "Halo! Saya ingin pesan website portfolio personal. Bisa diskusi detail proyeknya?",
                        "Bantuan Tugas":
                          "Halo! Saya butuh bantuan untuk tugas website kuliah/sekolah. Bisa bantu?",
                        "Order Design":
                          "Halo! Saya ingin order design untuk keperluan personal. Bisa konsultasi?",
                      };
                      const message =
                        messages[plan.buttonText as keyof typeof messages];
                      window.open(
                        `https://wa.me/62881082469420?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                  <Separator className="my-8" />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-start gap-2"
                      >
                        <CircleCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academic" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
              {academicPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={cn(
                    "relative border rounded-xl p-6 bg-background/50 transition-all duration-300",
                    {
                      "border-2 border-primary bg-gradient-to-br from-primary/5 to-background shadow-lg":
                        plan.isPopular,
                      "hover:shadow-md hover:border-primary/50":
                        !plan.isPopular,
                    }
                  )}
                >
                  {plan.isPopular && (
                    <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                      Paling Populer
                    </Badge>
                  )}
                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.price}
                  </p>
                  <p className="text-4xl font-bold">{plan.priceAmount}</p>
                  <p className="mt-4 font-medium text-muted-foreground">
                    {plan.description}
                  </p>

                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    size="lg"
                    className="w-full mt-6 text-base cursor-pointer hover:cursor-pointer"
                    onClick={() => {
                      const messages = {
                        "Bantuan Tugas Sekarang":
                          "Halo! Saya butuh bantuan untuk tugas website kuliah/sekolah. Bisa bantu dengan requirements yang saya miliki?",
                        "Konsultasi Skripsi":
                          "Halo! Saya sedang mengerjakan skripsi/thesis dan butuh bantuan untuk membuat website penelitian. Bisa konsultasi?",
                        "Mulai Project PKL":
                          "Halo! Saya butuh bantuan untuk project website PKL/magang. Bisa diskusi requirements projectnya?",
                      };
                      const message =
                        messages[plan.buttonText as keyof typeof messages];
                      window.open(
                        `https://wa.me/62881082469420?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                  <Separator className="my-8" />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-start gap-2"
                      >
                        <CircleCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Pricing;
