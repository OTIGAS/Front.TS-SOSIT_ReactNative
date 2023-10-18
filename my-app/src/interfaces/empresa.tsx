export interface GetEmpresa {
  id_usuario: number;
  nome: string;
  tipo: string;
  id_contato: number;
  email_contato: string;
  telefone: string;
  nome_contato: string;
  id_endereco: number;
  cep: string;
  rua: string;
  num: string;
  cidade: string;
  estado: string;
  id_informacoes_empresa: number;
  cnpj: string;
  descricao: string;
  link_site: string;
  img_perfil: string;
  id_dados_bancarios: number;
  nome_banco: string;
  numero_agencia: string;
  numero_conta: string;
}
