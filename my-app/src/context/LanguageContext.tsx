import { createContext, useEffect, useState } from "react";

import i18next from "./../i18n";

interface LanguageContextProps {
  language: string | null;
  handleLanguageChange: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
);

export function LanguageStorage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    handleChange();
    console.log(language)
  }, []);

  const [language, setTheme] = useState<string>("en-US");

  async function handleChange() {
    i18next.changeLanguage(language);
  }

  async function handleLanguageChange() {
    setTheme(language === "en-US" ? "pt-BR" : "en-US");
    i18next.changeLanguage(language);
  }

  return (
    <LanguageContext.Provider value={{ handleLanguageChange, language }}>
      {children}
    </LanguageContext.Provider>
  );
}
