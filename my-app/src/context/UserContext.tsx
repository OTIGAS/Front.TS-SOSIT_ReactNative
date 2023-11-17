import { createContext, useState, useEffect, PropsWithChildren } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Authentication, Profile } from "../api";

import { GetCliente } from "../interfaces/cliente";
import { GetEmpresa } from "../interfaces/empresa";

export type UserContext = {
  message?: string;
  setMessage?: (text: string) => void;

  erro: string;
  setErro: (text: string) => void;

  data?: GetCliente | GetEmpresa | null;

  login?: boolean;
  loading?: boolean;

  userLogin?: (email: string, senha: string) => void;
  userLogout?: () => void;
};

export const UserContext = createContext<UserContext | null>(null);

export const UserStorage = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<GetCliente | GetEmpresa | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);

  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function autoLogin() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
          setErro(null);
          const { url, options } = Profile(token);
          const response = await fetch(url, options);
          if (response.status != 200) {
            throw new Error("Token inválido");
          }
          const json = await response.json();
          setData(json[0]);
          setLogin(true);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token: string) {
    const { url, options } = Profile(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json[0]);
    setLogin(true);
  }

  async function userLogin(email: string, senha: string) {
    setLoading(true);

    const { url, options } = Authentication({ email, senha });

    const response = await fetch(url, options);
    const json = await response.json();

    if (json.erro) {
      setErro(json.erro)
    } else {
      try {
        await AsyncStorage.setItem("token", json.token);
        setMessage(json.mensagem);
        getUser(json.token);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  }

  async function userLogout() {
    setData(null);
    setErro(null);
    setLogin(false);
    setLoading(false);
    await AsyncStorage.removeItem("token", (error) => [console.log(error)]);
  }

  return (
    <UserContext.Provider
      value={{
        message,
        setMessage,

        erro,
        setErro,

        data,

        login,
        loading,

        userLogin,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
