import { createContext, useState, PropsWithChildren } from "react";

import { Usuario } from "../interfaces/usuario";

export type UserContext = {
  data: Usuario | null;
  
  loading: boolean;
}

export const UserContext = createContext<UserContext | null>(null);

export const UserStorage = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState()

  const [nome, setNome] = useState<string | null>(null)
  const [tipo, setTipo] = useState<string | null>(null)

  const [idUsuario, setIdUsuario] = useState<number | null>(null)
  const [idContato, setIdContato] = useState<number | null>(null)
  const [idEndereco, setIdEndereco] = useState<number | null>(null)
  const [idInformacoes, setIdInformacoes] = useState<number | null>(null)
  const [idBancarios, setIdBancarios] = useState<number | null>(null)

  return (
    <UserContext.Provider 
      value={{
        nome, setNome,
        tipo, setTipo,

        idUsuario, setIdUsuario,
        idContato, setIdContato,
        idEndereco, setIdEndereco,
        idInformacoes, setIdInformacoes,
        idBancarios, setIdBancarios,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}