"use client";

<<<<<<< HEAD
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
=======
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemeProvider } from "next-themes";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc

export default ThemeProvider;
