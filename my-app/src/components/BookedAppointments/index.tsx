import { Text, View } from 'react-native'

import { MyStyles } from "./styles";

export function BookedAppointments({ init, end }) {
  const styles = MyStyles();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Indisponível</Text>
      <View style={styles.subContainer}>
        <Text>Inicio</Text>
        <Text>Fim</Text>
      </View>
      <View style={styles.subContainer}>
        <Text>{init}</Text>
        <Text>{end}</Text>
      </View>
    </View>
  );
}