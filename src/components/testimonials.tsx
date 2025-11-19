import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    designation: "Owner",
    company: "TokoBajuOnline",
    testimonial:
      "Website yang dibuat sangat profesional dan responsif! Penjualan online kami meningkat drastis setelah website live. Tim sangat responsif dan mudah diajak komunikasi.",
    avatar: "",
  },
  {
    id: 2,
    name: "Sari Wijaya",
    designation: "Direktur",
    company: "Klinik Sehat",
    testimonial:
      "Pelayanan jasa desain grafis dan website sangat memuaskan. Hasilnya sesuai dengan ekspektasi dan proses revisi sangat mudah. Terima kasih sudah membantu branding klinik kami!",
    avatar: "",
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    designation: "Founder",
    company: "StartupXYZ",
    testimonial:
      "Dari konsultasi hingga launch website berjalan sangat lancar. Mereka paham kebutuhan startup dan memberikan solusi yang tepat sasaran. Recommended banget!",
    avatar: "",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    designation: "Marketing Manager",
    company: "Kafe Nusantara",
    testimonial:
      "Konten kreatif dan desain menu yang dibuat sangat menarik! Engagement media sosial kami meningkat pesat. Professional service dengan hasil yang outstanding.",
    avatar: "",
  },
  {
    id: 5,
    name: "Faisal Rahman",
    designation: "Owner",
    company: "Jasa Pengiriman Cepat",
    testimonial:
      "Website dengan sistem admin yang mudah digunakan. Pelanggan sekarang bisa tracking pengiriman langsung. Support teknis juga sangat membantu ketika ada pertanyaan.",
    avatar: "",
  },
  {
    id: 6,
    name: "Maya Kusuma",
    designation: "CEO",
    company: "Brand Fashion",
    testimonial:
      "Desain logo dan website yang dibuat sangat sesuai dengan identitas brand kami. Proses kolaborasi menyenangkan dan hasilnya melebihi ekspektasi. Terima kasih!",
    avatar: "",
  },
];

const Testimonials = () => (
  <div
    id="testimonials"
    className="flex justify-center items-center py-20 scroll-mt-20"
  >
    <div className="h-full w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6"
      >
        Testimoni Pelanggan
      </motion.h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <motion.div
      key={testimonial.id}
      whileHover={{ scale: 1.02 }}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <a href="#" target="_blank"></a>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </motion.div>
  ));

export default Testimonials;
