import { createContext, useEffect, useState } from "react";
import {
  ThemeContextValues,
  ThemeContextProviderProps,
} from "../Utilities/Types/ContextTypes";

export const ThemeContext = createContext({} as ThemeContextValues);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  // Storage
  const storedTheme = sessionStorage.getItem("upnyx-theme");

  // States
  const [theme, setTheme] = useState<"light" | "dark">(
    (storedTheme as "light" | "dark") || "dark"
  );

  // Effects
  useEffect(() => {
    sessionStorage.setItem("upnyx-theme", theme);
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
