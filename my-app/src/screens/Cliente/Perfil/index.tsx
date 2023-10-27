import { ScrollView, TouchableOpacity, Text } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import useForm from "../../../hooks/useForm";

export function Perfil({ navigation }) {
  const styles = MyStyles();

  const nome = useForm("");
  const email = useForm("email");

  const emailContato = useForm("email");
  const telefoneContato = useForm("fone");

  return (
    <>
      <Header screen="Perfil" />
      <ScrollView style={styles.perfil}>
        <Text style={styles.title}>Usuário</Text>
        <Text>Nome :</Text>
        <Input
          keyboardType="default"
          placeholder="Nome"
          placeholderTextColor="#B9B9B9"
          value={nome.value}
          error={nome.error}
          onBlur={nome.onBlur}
          onChange={nome.setValue}
        />
        <Text>E-mail :</Text>
        <Input
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="#B9B9B9"
          value={email.value}
          error={email.error}
          onBlur={email.onBlur}
          onChange={email.setValue}
        />
        <Text style={styles.title}>Contato</Text>
        <Text>E-mail Contato :</Text>
        <Input
          keyboardType="email-address"
          placeholder="E-mail Contato"
          placeholderTextColor="#B9B9B9"
          value={emailContato.value}
          error={emailContato.error}
          onBlur={emailContato.onBlur}
          onChange={emailContato.setValue}
        />
        <Text>Telefone Contato :</Text>
        <Input
          keyboardType="decimal-pad"
          placeholder="(00) 0.0000-0000"
          placeholderTextColor="#B9B9B9"
          value={telefoneContato.value}
          error={telefoneContato.error}
          onBlur={telefoneContato.onBlur}
          onChange={telefoneContato.setValue}
        />

        <TouchableOpacity style={styles.buttonSave}>
          <Text>Botão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogout}>
          <Text>Botão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete}>
          <Text>Botão</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} type="cliente" />
    </>
  );
}
