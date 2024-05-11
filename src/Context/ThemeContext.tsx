import { createContext, useState } from "react";
import {
  ThemeContextValues,
  ThemeContextProviderProps,
} from "../Utilities/Types/ContextTypes";

export const ThemeContext = createContext({} as ThemeContextValues);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  // States
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
