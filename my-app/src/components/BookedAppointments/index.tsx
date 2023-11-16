import { Text, View } from 'react-native'

import { MyStyles } from "./styles";

export function BookedAppointments({ navigation }) {
  const styles = MyStyles();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Indisponível</Text>
      <View style={styles.subContainer}>
        <Text>Inicio</Text>
        <Text>Fim</Text>
      </View>
      <View style={styles.subContainer}>
        <Text>09:00</Text>
        <Text>10:00</Text>
      </View>
    </View>
  );
}