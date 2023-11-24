export const API_URL = "https://api-sosit-3rwc.onrender.com";

type IClienteCadastro = {
  nome: string;
  email: string;
  senha: string;
  email_contato: string;
  telefone: string;
};

export function CreateCliente(body: IClienteCadastro) {
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
    },
  };
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

export function DeleteUsuario(token: string) {
  return {
    url: API_URL + "/usuario/deleta",
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
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

export function UpdateUsuario({ token, nome, email }: IUpdateUsuario) {
  const usuario = {
    nome,
    email,
  };
  return {
    url: API_URL + "/usuario/atualizar-usuario",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ usuario }),
    },
  };
}

type IUpdateContato = {
  token: string;
  email_contato: string;
  telefone: string;
  nome_contato: string;
};

export function UpdateContato({
  token,
  email_contato,
  telefone,
  nome_contato,
}: IUpdateContato) {
  const contato = {
    email_contato,
    telefone,
    nome_contato,
  };
  return {
    url: API_URL + "/usuario/atualizar-contato",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ contato }),
    },
  };
}

type IUpdateEndereco = {
  token: string;
  cep: string;
  rua: string;
  num: string;
  cidade: string;
  estado: string;
};

export function UpdateEndereco({
  token,
  cep,
  rua,
  num,
  cidade,
  estado,
}: IUpdateEndereco) {
  const endereco = {
    cep,
    rua,
    num,
    cidade,
    estado,
  };
  return {
    url: API_URL + "/usuario/atualizar-endereco",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ endereco }),
    },
  };
}

type IUpdateInfoEmpresa = {
  token: string;
  cnpj: string;
  descricao: string;
  linkSite: string;
  imgPerfil: string;
};

export function UpdateInfoEmpresa({
  token,
  cnpj,
  descricao,
  linkSite,
  imgPerfil,
}: IUpdateInfoEmpresa) {
  const informacoes_empresa = {
    cnpj: cnpj,
    descricao: descricao,
    link_site: linkSite,
    img_perfil: imgPerfil,
  };
  return {
    url: API_URL + "/usuario/atualizar-informacoes-empresa",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ informacoes_empresa }),
    },
  };
}

type IUpdateDadosBancarios = {
  token: string;
  banco: string;
  agencia: string;
  digito: string;
  tipoConta: string;
  conta: string;
};

export function UpdateDadosBancarios({
  token,
  banco,
  agencia,
  digito,
  tipoConta,
  conta,
}: IUpdateDadosBancarios) {
  const dados_bancarios = {
    banco: banco,
    agencia: agencia,
    digito: digito,
    tipo_conta: tipoConta,
    conta: conta,
  };
  return {
    url: API_URL + "/usuario/atualizar-dados-bancarios",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ dados_bancarios }),
    },
  };
}


type ICreateAgenda = {
  token: string;
  nome: string;
  servico: string;
  descricao: string;
};

export function CreateAgenda({
  token,
  nome,
  servico,
  descricao,
}: ICreateAgenda) {
  const agenda = {
    nome,
    servico,
    descricao,
  };
  return {
    url: API_URL + "/agenda",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ data: { agenda } }),
    },
  };
}

export function ListAllAgendas() {
  return {
    url: API_URL + "/agenda/listar-todas",
    options: {
      method: "GET",
    },
  };
}

export function ListAgenda(token: string) {
  return {
    url: API_URL + "/agenda/listar-todas-por-token",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function ListAgendaByName(nome: string) {
  return {
    url: API_URL + `/agenda/listar-por-nome/${nome}`,
    options: {
      method: "GET",
    },
  };
}

export function ListAgendaById(id: string) {
  return {
    url: API_URL + `/agenda/listar-por-id/${JSON.parse(id)}`,
    options: {
      method: "GET",
    },
  };
}

type IUpdateAgenda = {
  token: string;
  idAgenda: string;
  horarios:
    | {
        seg: { inicio: string; fim: string }[];
        ter: { inicio: string; fim: string }[];
        qua: { inicio: string; fim: string }[];
        qui: { inicio: string; fim: string }[];
        sex: { inicio: string; fim: string }[];
        sab: { inicio: string; fim: string }[];
        dom: { inicio: string; fim: string }[];
      }
    | [];
};

export function UpdateAgenda({ token, idAgenda, horarios }: IUpdateAgenda) {
  return {
    url: API_URL + "/agenda/atualizar-horarios",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        data: {
          idAgenda,
          horarios,
        },
      }),
    },
  };
}

export function ListAgendaTimeByDate(idAgenda: string, dataCompleta: string) {
  return {
    url: API_URL + "/agenda/listar-por-dia",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          idAgenda,
          dataCompleta,
      }),
    },
  };
}

