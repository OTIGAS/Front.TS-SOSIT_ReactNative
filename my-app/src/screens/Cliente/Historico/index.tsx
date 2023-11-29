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

      </ScrollView>
      <TouchableOpacity style={styles.buttonCancel} disabled={true}>
        <Text>Demarcar</Text>
      </TouchableOpacity>
      <Footer navigation={navigation} type="cliente" />
    </View>
  );
}
