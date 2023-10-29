import { ScrollView, Text } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { OpenAppointments } from "../../../components/OpenAppointments";
import { BookedAppointments } from "../../../components/BookedAppointments";

export function AgendaEmpresaC({ navigation }) {
  const styles = MyStyles();

  return (
    <>
      <Header screen="Agenda" />
      <ScrollView style={styles.mainContainer}>
        <OpenAppointments navigation={navigation}/>
        <BookedAppointments navigation={navigation}/>
      </ScrollView>
      <Footer 
        navigation={navigation} 
        type="cliente"
      />
    </>
  );
}
