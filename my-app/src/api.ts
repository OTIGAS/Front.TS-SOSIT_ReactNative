export const API_URL = "http://10.5.17.9:3333"

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