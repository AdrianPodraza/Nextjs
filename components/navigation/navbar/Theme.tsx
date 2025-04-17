"use client";

<<<<<<< HEAD
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
=======
import { Moon, Sun } from "lucide-react";
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<<<<<<< HEAD
const Theme = () => {
=======
function Theme() {
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
<<<<<<< HEAD
          <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
=======
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
<<<<<<< HEAD
};

=======
}
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc
export default Theme;
