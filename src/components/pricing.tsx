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
    buttonText: "Hubungi untuk Konsultasi",
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
    buttonText: "Mulai Proyek Anda",
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
    name: "Personal Website",
    price: "Mulai dari",
    priceAmount: "Rp 500K",
    description:
      "Website portfolio personal untuk menampilkan karya dan prestasi Anda.",
    features: [
      { title: "Portfolio website 1-5 halaman" },
      { title: "Template modern responsif" },
      { title: "Galeri foto/karya" },
      { title: "Form kontak sederhana" },
      { title: "Hosting gratis 1 tahun" },
      { title: "Waktu pengerjaan 1 minggu" },
    ],
    buttonText: "Pesan Sekarang",
  },
  {
    name: "Web Assignment",
    price: "Mulai dari",
    priceAmount: "Rp 150K",
    isRecommended: true,
    description: "Bantuan pembuatan website untuk tugas kuliah atau sekolah.",
    features: [
      { title: "Website sesuai requirement tugas" },
      { title: "HTML, CSS, JavaScript" },
      { title: "Responsive design" },
      { title: "Source code lengkap" },
      { title: "Dokumentasi sederhana" },
      { title: "Revisi 2x" },
      { title: "Waktu pengerjaan 1-2 hari" },
    ],
    buttonText: "Bantuan Tugas",
    isPopular: true,
  },
  {
    name: "Design Package",
    price: "Mulai dari",
    priceAmount: "Rp 100K",
    description:
      "Paket desain untuk berbagai kebutuhan personal dan acara spesial.",
    features: [
      { title: "Undangan digital (birthday, wedding)" },
      { title: "Logo personal/brand kecil" },
      { title: "Banner social media" },
      { title: "Kartu nama digital" },
      { title: "File HD ready print" },
      { title: "Revisi 3x" },
      { title: "Waktu pengerjaan 1-3 hari" },
    ],
    buttonText: "Order Design",
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
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-muted relative">
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
                    className="w-full mt-6 text-base"
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
                    className="w-full mt-6 text-base"
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
