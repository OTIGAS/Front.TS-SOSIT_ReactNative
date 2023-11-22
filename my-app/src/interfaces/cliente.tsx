export interface GetCliente {
  id_usuario: number;
  nome: string;
  email: string;
  tipo: string;
  id_contato: number;
  email_contato: string;
  telefone: string;
  nome_contato: string;
}

export type PostCliente = {
  usuario: {
    nome: string;
    tipo: string;
    email: string;
  },
  contato: {
    email_contato: string;
    telefone: string;
    nome_contato: string;
  }
}