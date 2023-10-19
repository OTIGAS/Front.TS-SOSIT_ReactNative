import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

interface ThemaContextProps {
  theme: string | null;
  handleThemeChange: () => void;
}

export const ThemaContext = createContext<ThemaContextProps>(
  {} as ThemaContextProps
);

export function ThemaStorage({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");

  async function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
    await AsyncStorage.setItem("theme", theme);
  }

  return (
    <ThemaContext.Provider value={{ handleThemeChange, theme }}>
      {children}
    </ThemaContext.Provider>
  );
}
