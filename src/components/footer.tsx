import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaGlobe } from "react-icons/fa";
import logoLight from "/images/logo-light.png";
import logoDark from "/images/logo-dark.png";
import { useEffect, useState } from "react";

const footerLinks = [
  {
    title: "Layanan",
    links: [
      { name: "Website Bisnis", href: "#features" },
      { name: "Portfolio Personal", href: "#features" },
      { name: "E-commerce", href: "#features" },
      { name: "Sistem Informasi", href: "#features" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Proses Kerja", href: "#process" },
      { name: "Tim", href: "#team" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Testimoni", href: "#testimonials" },
      { name: "Kontak", href: "#contact" },
      { name: "Panduan", href: "#guide" },
    ],
  },
];

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t mt-40">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-16 px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Theme-aware Logo */}
              <img
                src={theme === "dark" ? logoDark : logoLight}
                alt="Nanas Gunung Logo"
                className="w-48 h-auto object-contain transition-opacity duration-200"
              />

              <p className="text-muted-foreground text-sm leading-relaxed">
                Solusi website profesional untuk bisnis dan personal. Kami
                menghadirkan teknologi terdepan dengan desain modern dan
                performa optimal.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Medan, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+62881082469420"
                    className="hover:text-primary transition-colors"
                  >
                    +62 881 0824 69420
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="mailto:hello@nanasgunung.com"
                    className="hover:text-primary transition-colors"
                  >
                    hello@nanasgunung.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Senin - Jumat: 09:00 - 18:00</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/nanasgunung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/company/nanasgunung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="https://nanasgunung.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <FaGlobe className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/62881082469420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h6 className="font-semibold text-foreground">
                  {section.title}
                </h6>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(link.href.substring(1))
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />
    </footer>
  );
};

export default Footer;
