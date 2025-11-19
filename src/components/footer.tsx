import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import logoLight from "/images/logo-dark.png";

const footerLinks = [
  {
    title: "Layanan",
    href: "#features",
  },
  {
    title: "Paket & Harga",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "Testimoni",
    href: "#testimonials",
  },
  {
    title: "Kontak",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            {/* Logo */}
            <img
              src={logoLight}
              alt="Nanas Gunung Logo"
              className="w-64 h-auto object-contain"
            />

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="max-w-xs w-full">
            <h6 className="font-semibold">Hubungi Kami</h6>
            <p className="mt-4 text-sm text-muted-foreground">
              Butuh konsultasi atau informasi lebih lanjut? Jangan ragu untuk
              menghubungi kami.
            </p>
            <Button className="mt-6 w-full sm:w-auto">Konsultasi Gratis</Button>
          </div>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" target="_blank">
              Nanas Gunung
            </a>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank">
              <TwitchIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
