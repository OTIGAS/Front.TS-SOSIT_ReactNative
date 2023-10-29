import { View, Text } from "react-native";
import { MyStyles } from "./styles";

export function Commitment({navigation}) {
  const styles = MyStyles();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>Nome do Cliente</Text>
        <Text style={styles.textTwo}>Nome da Agenda</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>Dia Marcado</Text>
        <Text style={styles.textTwo}>Hora Marcada</Text>
      </View>
    </View>
  );
}