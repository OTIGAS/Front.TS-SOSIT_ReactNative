import { ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import useForm from "../../../hooks/useForm";
import { CreateEmpresa } from "../../../api";

export function CadastroE({ navigation }) {
  const styles = MyStyles();

  const nome = useForm("");
  const email = useForm("email");
  const senha = useForm("password");

  const nome_contato = useForm("");
  const email_contato = useForm("email");
  const telefone = useForm("fone");

  const cep = useForm("cep");
  const estado = useForm("");
  const cidade = useForm("");
  const rua = useForm("");
  const num = useForm("");

  const cnpj = useForm("cnpj");
  const descricao = useForm("");
  const link_site = useForm("");
  const img_perfil = useForm("");

  const banco = useForm("");
  const agencia = useForm("");
  const digito = useForm("");
  const tipo_conta = useForm("");
  const conta = useForm("");

  function openAlertHome(mensagem: string) {
    Alert.alert(
      mensagem,
      null,
      [
        {
          text: "Voltar",
          onPress: () => navigation.navigate("Login", { name: "Login" }),
        },
        { text: "Cancelar", onPress: () => console.log("Cancelar") },
      ],
      {
        cancelable: true,
      }
    );
  }

  async function handlePress() {
    if (
      nome.validate() &&
      email.validate() &&
      senha.validate() &&
      nome_contato.validate() &&
      email_contato.validate() &&
      telefone.validate() &&
      cep.validate() &&
      estado.validate() &&
      cidade.validate() &&
      rua.validate() &&
      num.validate() &&
      cnpj.validate() &&
      descricao.validate() &&
      link_site.validate() &&
      img_perfil.validate() &&
      banco.validate() &&
      agencia.validate() &&
      digito.validate() &&
      tipo_conta.validate() &&
      conta.validate()
    ) {
      const body = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        nome_contato: nome_contato.value,
        email_contato: email_contato.value,
        telefone: telefone.value,
        cep: cep.value,
        estado: estado.value,
        cidade: cidade.value,
        rua: rua.value,
        num: num.value,
        cnpj: cnpj.value,
        descricao: descricao.value,
        link_site: link_site.value,
        img_perfil: img_perfil.value,
        banco: banco.value,
        agencia: agencia.value,
        digito: digito.value,
        tipo_conta: tipo_conta.value,
        conta: conta.value,
      };

      const { url, options } = CreateEmpresa(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.mensagem) {
        openAlertHome(json.mensagem);
      }
    }
  }

  return (
    <>
      <Header screen="Cadastro" />
      <ScrollView style={styles.perfil}>
        <Text style={styles.title}>Usuário</Text>
        <Input
          keyboardType="default"
          placeholder="Nome"
          placeholderTextColor="#B9B9B9"
          value={nome.value}
          error={nome.error}
          onBlur={nome.onBlur}
          onChange={nome.setValue}
        />
        <Input
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="#B9B9B9"
          value={email.value}
          error={email.error}
          onBlur={email.onBlur}
          onChange={email.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Senha"
          placeholderTextColor="#B9B9B9"
          value={senha.value}
          error={senha.error}
          onBlur={senha.onBlur}
          onChange={senha.setValue}
        />
        <Text style={styles.title}>Contato</Text>
        <Input
          keyboardType="default"
          placeholder="Nome da Pessoa de Contato"
          placeholderTextColor="#B9B9B9"
          value={nome_contato.value}
          error={nome_contato.error}
          onBlur={nome_contato.onBlur}
          onChange={nome_contato.setValue}
        />
        <Input
          keyboardType="email-address"
          placeholder="E-mail Contato"
          placeholderTextColor="#B9B9B9"
          value={email_contato.value}
          error={email_contato.error}
          onBlur={email_contato.onBlur}
          onChange={email_contato.setValue}
        />
        <Input
          keyboardType="decimal-pad"
          placeholder="(00) 0.0000-0000"
          placeholderTextColor="#B9B9B9"
          value={telefone.value}
          error={telefone.error}
          onBlur={telefone.onBlur}
          onChange={telefone.setValue}
        />

        <Text style={styles.title}>Endereço</Text>
        <Input
          keyboardType="default"
          placeholder="CEP"
          placeholderTextColor="#B9B9B9"
          value={cep.value}
          error={cep.error}
          onBlur={cep.onBlur}
          onChange={cep.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Estado"
          placeholderTextColor="#B9B9B9"
          value={estado.value}
          error={estado.error}
          onBlur={estado.onBlur}
          onChange={estado.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Cidade"
          placeholderTextColor="#B9B9B9"
          value={cidade.value}
          error={cidade.error}
          onBlur={cidade.onBlur}
          onChange={cidade.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Rua"
          placeholderTextColor="#B9B9B9"
          value={rua.value}
          error={rua.error}
          onBlur={rua.onBlur}
          onChange={rua.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Número"
          placeholderTextColor="#B9B9B9"
          value={num.value}
          error={num.error}
          onBlur={num.onBlur}
          onChange={num.setValue}
        />

        <Text style={styles.title}>Informações da Empresa</Text>
        <Input
          keyboardType="default"
          placeholder="CNPJ"
          placeholderTextColor="#B9B9B9"
          value={cnpj.value}
          error={cnpj.error}
          onBlur={cnpj.onBlur}
          onChange={cnpj.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Sobre a empresa"
          placeholderTextColor="#B9B9B9"
          value={descricao.value}
          error={descricao.error}
          onBlur={descricao.onBlur}
          onChange={descricao.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Link do Site da Empresa"
          placeholderTextColor="#B9B9B9"
          value={link_site.value}
          error={link_site.error}
          onBlur={link_site.onBlur}
          onChange={link_site.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Link de Imagem de Pefil"
          placeholderTextColor="#B9B9B9"
          value={img_perfil.value}
          error={img_perfil.error}
          onBlur={img_perfil.onBlur}
          onChange={img_perfil.setValue}
        />

        <Text style={styles.title}>Dados Bancários</Text>
        <Input
          keyboardType="default"
          placeholder="Banco"
          placeholderTextColor="#B9B9B9"
          value={banco.value}
          error={banco.error}
          onBlur={banco.onBlur}
          onChange={banco.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Agencia"
          placeholderTextColor="#B9B9B9"
          value={agencia.value}
          error={agencia.error}
          onBlur={agencia.onBlur}
          onChange={agencia.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Digito"
          placeholderTextColor="#B9B9B9"
          value={digito.value}
          error={digito.error}
          onBlur={digito.onBlur}
          onChange={digito.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Tipo da Conta"
          placeholderTextColor="#B9B9B9"
          value={tipo_conta.value}
          error={tipo_conta.error}
          onBlur={tipo_conta.onBlur}
          onChange={tipo_conta.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Conta"
          placeholderTextColor="#B9B9B9"
          value={conta.value}
          error={conta.error}
          onBlur={conta.onBlur}
          onChange={conta.setValue}
        />

        <TouchableOpacity style={styles.buttonSave} onPress={handlePress}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonLogout} 
          onPress={() => navigation.navigate("Login", { name: "Login" })}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
