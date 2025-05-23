"use client";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sun } from "lucide-react";

function Navbar() {
  const [darkmode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  const toggleMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <NavigationMenu className="container mx-auto pb-12 pt-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/banan">projects</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/banan">blog</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink onClick={toggleMode}>
            <Sun />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
