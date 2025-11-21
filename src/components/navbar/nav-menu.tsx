import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-4 data-[orientation=vertical]:w-full">
      <NavigationMenuItem className="data-[orientation=vertical]:w-full">
        <NavigationMenuLink asChild>
          <a
            href="#home"
            className="hover:text-primary transition-colors data-[orientation=vertical]:block data-[orientation=vertical]:py-2"
          >
            Home
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="data-[orientation=vertical]:w-full">
        <NavigationMenuLink asChild>
          <a
            href="#features"
            className="hover:text-primary transition-colors data-[orientation=vertical]:block data-[orientation=vertical]:py-2"
          >
            Mengapa
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="data-[orientation=vertical]:w-full">
        <NavigationMenuLink asChild>
          <a
            href="#portfolio"
            className="hover:text-primary transition-colors data-[orientation=vertical]:block data-[orientation=vertical]:py-2"
          >
            Portfolio
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="data-[orientation=vertical]:w-full">
        <NavigationMenuLink asChild>
          <a
            href="#process"
            className="hover:text-primary transition-colors data-[orientation=vertical]:block data-[orientation=vertical]:py-2"
          >
            Proses
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="data-[orientation=vertical]:w-full">
        <NavigationMenuLink asChild>
          <a
            href="#pricing"
            className="hover:text-primary transition-colors data-[orientation=vertical]:block data-[orientation=vertical]:py-2"
          >
            Harga
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="data-[orientation=vertical]:w-full">
        <NavigationMenuLink asChild>
          <a
            href="#faq"
            className="hover:text-primary transition-colors data-[orientation=vertical]:block data-[orientation=vertical]:py-2"
          >
            FAQ
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="hidden md:block">
        <NavigationMenuLink asChild>
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 font-semibold"
          >
            Hubungi Kami
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
