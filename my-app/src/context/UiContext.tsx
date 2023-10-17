import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  PropsWithChildren,
  useState,
} from "react";

type IUiContext = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

const UiContext = createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = useState(false);

  return (
    <UiContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
