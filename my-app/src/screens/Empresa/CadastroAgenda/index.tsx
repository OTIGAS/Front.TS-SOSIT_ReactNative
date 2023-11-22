import { useContext } from "react";
import { ScrollView, TouchableOpacity, Text, Alert } from "react-native";

import { MyStyles } from "./styles";

import { CreateAgenda } from "../../../api";
import { UserContext } from "../../../context/UserContext";

import useForm from "../../../hooks/useForm";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

export function CadastroAgendaE({ navigation }) {
  const styles = MyStyles();

  const { token } = useContext(UserContext);

  const nome = useForm("");
  const servico = useForm("");
  const descricao = useForm("");

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

  function openAlertResponse(mensagem: string) {
    Alert.alert(mensagem, null, [{ text: "Ok", onPress: () => null }], {
      cancelable: true,
    });
  }

  async function handlePress() {
    if (nome.validate() && servico.validate() && descricao.validate()) {
      const data = {
        token: token,
        nome: nome.value,
        servico: servico.value,
        descricao: descricao.value,
      };

      const { url, options } = CreateAgenda(data);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertResponse(json.erro);
      } else {
        openAlertResponse(json.mensagem);
      }
      nome.setValue("");
      servico.setValue("");
      descricao.setValue("");
    } else {
      openErrorAlert();
    }
  }

  return (
    <>
      <Header screen="Cadastro de Agenda" />
      <ScrollView style={styles.mainContainer}>
        <Input
          keyboardType="default"
          placeholder="Nome da Agenda"
          placeholderTextColor="#B9B9B9"
          value={nome.value}
          error={nome.error}
          onBlur={nome.onBlur}
          onChange={nome.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Serviço Prestado"
          placeholderTextColor="#B9B9B9"
          value={servico.value}
          error={servico.error}
          onBlur={servico.onBlur}
          onChange={servico.setValue}
        />
        <Input
          keyboardType="default"
          placeholder="Descrição para Agenda"
          placeholderTextColor="#B9B9B9"
          value={descricao.value}
          error={descricao.error}
          onBlur={descricao.onBlur}
          onChange={descricao.setValue}
        />
        <TouchableOpacity style={styles.buttonSave} onPress={handlePress}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() =>
            navigation.navigate("PesquisaEmpresa", { name: "PesquisaEmpresa" })
          }
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} type="empresa" />
    </>
  );
}
