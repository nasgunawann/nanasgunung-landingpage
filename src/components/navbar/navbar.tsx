import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import logoLight from "/images/logo-light.png";
import logoDark from "/images/logo-dark.png";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme =
        (localStorage.getItem("theme") as "light" | "dark") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      setTheme(currentTheme);
    };

    // Listen for theme changes from other components
    window.addEventListener("storage", handleThemeChange);

    // Check for theme changes periodically to sync with theme toggle
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
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto py-2 px-4">
        {/* Theme-aware Logo */}
        <a href="/">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            className="w-32 h-auto object-contain transition-opacity duration-200"
          />
        </a>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button> */}
          <Button className="hidden xs:inline-flex">Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
