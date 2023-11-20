import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { OpenAppointments } from "../../../components/OpenAppointments";
import { BookedAppointments } from "../../../components/BookedAppointments";

export function AgendaEmpresaE({ navigation }) {
  const styles = MyStyles();

  async function handlePress() {
    navigation.navigate("CadastroAgenda", { name: "CadastroAgenda" });
  }

  return (
    <>
      <Header screen="Agenda" />
      <ScrollView style={styles.mainContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text>Cadastrar Nova Agenda</Text>
        </TouchableOpacity>
        <OpenAppointments navigation={navigation} />
        <BookedAppointments navigation={navigation} />
      </ScrollView>
      <Footer navigation={navigation} type="empresa" />
    </>
  );
}