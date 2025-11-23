import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import logoLight from "/images/logo-light.png";
import logoDark from "/images/logo-dark.png";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      const currentTheme = isDark ? "dark" : "light";
      if (currentTheme !== theme) {
        setTheme(currentTheme);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [theme]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="Logo"
              className="w-32 h-auto transition-opacity duration-200"
            />
          </div>

          {/* Navigation Menu */}
          <div onClick={() => setOpen(false)}>
            <NavMenu orientation="vertical" className="" />
          </div>

          {/* CTA Button at bottom */}
          <div className="mt-auto pt-6 border-t">
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold"
            >
              <a href="#cta" onClick={() => setOpen(false)}>
                Hubungi Kami Sekarang
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
