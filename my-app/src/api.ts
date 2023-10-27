export const API_URL = "http://192.168.15.25:3333"

type IAuthentication ={
  email: string;
  senha: string
}

export function Authentication({email, senha}: IAuthentication) {
  const data = {email, senha}
  return {
    url: API_URL + "/usuario/autenticar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data })
    }
  }
}

export function Profile(token: string) {
  return {
    url: API_URL + "/usuario/listar-meu-perfil",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  }
}