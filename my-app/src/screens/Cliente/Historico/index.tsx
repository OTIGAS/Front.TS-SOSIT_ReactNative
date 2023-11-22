import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Commitment } from "../../../components/Commitment";

export function HistoricoC({ navigation }) {
  const styles = MyStyles();

  return (
    <View style={styles.historico}>
      <Header screen="Histórico" />
      <ScrollView>
        <Commitment usuario="Empresa 01" agenda="Agenda 01" dia="01/10/2023" horaInicio="09:30" horaFim="10:00" />
        <Commitment usuario="Empresa 02" agenda="Agenda 02" dia="01/10/2023" horaInicio="10:15" horaFim="11:00" />
        <Commitment usuario="Empresa 03" agenda="Agenda 03" dia="01/10/2023" horaInicio="11:15" horaFim="12:00" />
        <Commitment usuario="Empresa 04" agenda="Agenda 04" dia="01/10/2023" horaInicio="14:00" horaFim="15:00" />
        <Commitment usuario="Empresa 05" agenda="Agenda 05" dia="01/10/2023" horaInicio="15:15" horaFim="16:00" />
      </ScrollView>
      <TouchableOpacity style={styles.buttonCancel} disabled={true}>
        <Text>Demarcar</Text>
      </TouchableOpacity>
      <Footer navigation={navigation} type="cliente" />
    </View>
  );
}
