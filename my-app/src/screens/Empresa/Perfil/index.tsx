import { ScrollView, TouchableOpacity, Text } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import useForm from "../../../hooks/useForm";

export function PerfilE({ navigation }) {
  const styles = MyStyles();

  const nome = useForm("");
  const email = useForm("email");
  const senha = useForm("password");

  const nomeContato = useForm("");
  const emailContato = useForm("email");
  const telefoneContato = useForm("fone");

  const cep = useForm("cep");
  const estado = useForm("");
  const cidade = useForm("");
  const rua = useForm("");
  const num = useForm("");

  const cnpj = useForm("cnpj");
  const descricao = useForm("");
  const linkSite = useForm("");
  const imgPerfil = useForm("");

  const banco = useForm("");
  const agencia = useForm("");
  const digito = useForm("");
  const tipoConta = useForm("");
  const conta = useForm("");

  return (
    <>
      <Header screen="Perfil" />
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
          value={nomeContato.value}
          error={nomeContato.error}
          onBlur={nomeContato.onBlur}
          onChange={nomeContato.setValue}
        />
        <Input
          keyboardType="email-address"
          placeholder="E-mail Contato"
          placeholderTextColor="#B9B9B9"
          value={emailContato.value}
          error={emailContato.error}
          onBlur={emailContato.onBlur}
          onChange={emailContato.setValue}
        />
        <Input
          keyboardType="decimal-pad"
          placeholder="(00) 0.0000-0000"
          placeholderTextColor="#B9B9B9"
          value={telefoneContato.value}
          error={telefoneContato.error}
          onBlur={telefoneContato.onBlur}
          onChange={telefoneContato.setValue}
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
          value={linkSite.value}
          error={linkSite.error}
          onBlur={linkSite.onBlur}
          onChange={linkSite.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Link de Imagem de Pefil"
          placeholderTextColor="#B9B9B9"
          value={imgPerfil.value}
          error={imgPerfil.error}
          onBlur={imgPerfil.onBlur}
          onChange={imgPerfil.setValue}
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
          value={tipoConta.value}
          error={tipoConta.error}
          onBlur={tipoConta.onBlur}
          onChange={tipoConta.setValue}
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

        <TouchableOpacity style={styles.buttonSave}>
          <Text>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => navigation.navigate("Login", { name: "Login" })}
        >
          <Text>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete}>
          <Text>Deletar Conta</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} type="empresa" />
    </>
  );
}
