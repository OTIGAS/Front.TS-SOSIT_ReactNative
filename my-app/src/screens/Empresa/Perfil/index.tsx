import { ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import useForm from "../../../hooks/useForm";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import {
  DeleteUsuario,
  UpdateContato,
  UpdateDadosBancarios,
  UpdateEndereco,
  UpdateInfoEmpresa,
  UpdateUsuario,
} from "../../../api";

export function PerfilE({ navigation }) {
  const styles = MyStyles();

  const { data, token, login, userLogout } = useContext(UserContext);

  const nome = useForm("");
  const email = useForm("email");

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

  useEffect(() => {
    if (login) {
      if (data) {
        nome.setValue(data.nome);
        email.setValue(data.email);

        nomeContato.setValue(data.nome_contato);
        telefoneContato.setValue(data.telefone);
        emailContato.setValue(data.email_contato);

        cep.setValue(data.cep);
        estado.setValue(data.estado);
        cidade.setValue(data.cidade);
        rua.setValue(data.rua);
        num.setValue(data.num);

        cnpj.setValue(data.cnpj);
        descricao.setValue(data.descricao);
        linkSite.setValue(data.link_site);
        imgPerfil.setValue(data.img_perfil);

        banco.setValue(data.banco);
        agencia.setValue(data.agencia);
        digito.setValue(data.digito);
        tipoConta.setValue(data.tipo_conta);
        conta.setValue(data.conta);
      }
    } else {
      navigation.navigate("Login", { name: "Login" });
    }
  }, [data]);

  function openAlertPerfil(mensagem: string) {
    Alert.alert(
      mensagem,
      null,
      [
        {
          text: "Ok",
          onPress: () => null,
        },
      ],
      {
        cancelable: true,
      }
    );
  }

  const openErrorAlert = () => {
    Alert.alert(
      "Falha ao autenticar.",
      "Necessário preencher todos os campos",
      [{ text: "Ok", onPress: () => null }],
      {
        cancelable: true,
      }
    );
  };

  const openConfirmAlert = () => {
    Alert.alert(
      "Tem certeza que que apagar sua conta.",
      null,
      [{ text: "Ok", onPress: () => handlePressDeleteUsuario() }],
      {
        cancelable: true,
      }
    );
  };

  async function handlePressDeleteUsuario() {
    if (token) {
      const { url, options } = DeleteUsuario(token);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
        userLogout();
        navigation.navigate("Login", { name: "Login" });
      } else {
        openAlertPerfil("Falha ao deletar Usuário.");
      }
    }
  }

  async function handlePressUpdateUsuario() {
    if (nome.validate() && email.validate()) {
      const body = {
        nome: nome.value,
        email: email.value,
        token,
      };
      const { url, options } = UpdateUsuario(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Usuário.");
      }
    } else {
      openErrorAlert();
    }
  }

  async function handlePressUpdateContato() {
    if (emailContato.validate() && telefoneContato.validate()) {
      const body = {
        email_contato: emailContato.value,
        telefone: email.value,
        nome_contato: data.nome,
        token,
      };
      const { url, options } = UpdateContato(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Contato.");
      }
    } else {
      openErrorAlert();
    }
  }

  async function handlePressUpdateEndereco() {
    if (
      cep.validate() &&
      estado.validate() &&
      cidade.validate() &&
      rua.validate() &&
      num.validate()
    ) {
      const body = {
        cep: cep.value,
        estado: estado.value,
        cidade: cidade.value,
        rua: rua.value,
        num: num.value,
        token,
      };
      const { url, options } = UpdateEndereco(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Endereço.");
      }
    } else {
      openErrorAlert();
    }
  }

  async function handlePressUpdateInfoEmpresa() {
    if (
      cnpj.validate() &&
      descricao.validate() &&
      linkSite.validate() &&
      imgPerfil.validate()
    ) {
      const body = {
        cnpj: cnpj.value,
        descricao: descricao.value,
        linkSite: linkSite.value,
        imgPerfil: imgPerfil.value,
        token,
      };
      const { url, options } = UpdateInfoEmpresa(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Informações da Empresa.");
      }
    } else {
      openErrorAlert();
    }
  }

  async function handlePressUpdateDadosBancarios() {
    if (
      banco.validate() &&
      agencia.validate() &&
      digito.validate() &&
      tipoConta.validate() &&
      conta.validate()
    ) {
      const body = {
        banco: banco.value,
        agencia: agencia.value,
        digito: digito.value,
        tipoConta: tipoConta.value,
        conta: conta.value,
        token,
      };
      const { url, options } = UpdateDadosBancarios(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Dados Bancários.");
      }
    } else {
      openErrorAlert();
    }
  }

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
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handlePressUpdateUsuario}
        >
          <Text style={styles.label}>Salvar dados Usuario</Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handlePressUpdateContato}
        >
          <Text style={styles.label}>Salvar dados Contato</Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handlePressUpdateEndereco}
        >
          <Text style={styles.label}>Salvar dados Endereço</Text>
        </TouchableOpacity>

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
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handlePressUpdateInfoEmpresa}
        >
          <Text style={styles.label}>Salvar dados Informações</Text>
        </TouchableOpacity>

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
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handlePressUpdateDadosBancarios}
        >
          <Text style={styles.label}>Salvar dados Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => {
            userLogout();
            navigation.navigate("Login", { name: "Login" });
          }}
        >
          <Text>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={openConfirmAlert}
        >
          <Text>Deletar Conta</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} type="empresa" />
    </>
  );
}
