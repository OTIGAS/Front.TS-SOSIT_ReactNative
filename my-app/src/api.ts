export const API_URL = "http://192.168.15.25:3333";

type IClienteCadastro = {
  nome: string;
  email: string;
  senha: string;
  email_contato: string;
  telefone: string;
}

export function CreateCliente(body: IClienteCadastro){
  return {
    url: API_URL + "/usuario/cliente",
    options: {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          usuario: {
            nome: body.nome,
            email: body.email,
            senha: body.senha,
          },
          contato: {
            nome_contato: body.nome,
            telefone: body.telefone,
            email_contato: body.email_contato,
          },
        },
      }),
    }
  }
}

type IEmpresaCadastro = {
  nome: string;
  email: string;
  senha: string;
  email_contato: string;
  telefone: string;
  nome_contato: string;
  cep: string;
  rua: string;
  num: string;
  cidade: string;
  estado: string;
  cnpj: string;
  descricao: string;
  link_site: string;
  img_perfil: string;
  banco: string;
  agencia: string;
  digito: string;
  tipo_conta: string;
  conta: string;
};

export function CreateEmpresa(body: IEmpresaCadastro) {
  return {
    url: API_URL + "/usuario/empresa",
    options: {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          usuario: {
            nome: body.nome,
            email: body.email,
            senha: body.senha,
          },
          contato: {
            telefone: body.telefone,
            nome_contato: body.nome_contato,
            email_contato: body.email_contato,
          },
          endereco: {
            cep: body.cep,
            rua: body.rua,
            num: body.num,
            cidade: body.cidade,
            estado: body.estado,
          },
          informacoes_empresa: {
            cnpj: body.cnpj,
            descricao: body.descricao,
            link_site: body.link_site,
            img_perfil: body.img_perfil,
          },
          dados_bancarios: {
            banco: body.banco,
            agencia: body.agencia,
            digito: body.digito,
            tipo_conta: body.tipo_conta,
            conta: body.conta,
          },
        },
      }),
    },
  };
}

type IAuthentication = {
  email: string;
  senha: string;
};

export function Authentication({ email, senha }: IAuthentication) {
  return {
    url: API_URL + "/usuario/autenticar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    },
  };
}

export function Profile(token: string) {
  return {
    url: API_URL + "/usuario/listar-meu-perfil",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

type IUpdateUsuario = {
  token: string;
  nome: string;
  email: string;
};

export function UpdateUsuario({ token, nome, email}: IUpdateUsuario) {
  const usuario = {
    nome, email
  }
  return {
    url: API_URL + "/usuario/atualizar-usuario",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({usuario}),
    },
  }
}

type IUpdateContato = {
  token: string;
  email_contato: string;
  telefone: string;
  nome_contato: string;
};

export function UpdateContato({ token, email_contato, telefone, nome_contato}: IUpdateContato) {
  const contato = {
    email_contato, telefone, nome_contato
  }
  return {
    url: API_URL + "/usuario/atualizar-contato",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({contato}),
    },
  }
}