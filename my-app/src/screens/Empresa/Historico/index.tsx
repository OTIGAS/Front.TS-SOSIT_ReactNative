import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Commitment } from "../../../components/Commitment";

export function HistoricoE({ navigation }) {
  const styles = MyStyles();

  return (
    <View style={styles.historico}>
      <Header screen="Histórico" />
      <ScrollView>
        <Commitment  usuario="Cliente 01" agenda="Agenda 03" dia="01/10/2023" horaInicio="11:15" horaFim="12:00"/>
      </ScrollView>
      <TouchableOpacity style={styles.buttonCancel} disabled={true}>
        <Text>Demarcar</Text>
      </TouchableOpacity>
      <Footer navigation={navigation} type="empresa" />
    </View>
  );
}
