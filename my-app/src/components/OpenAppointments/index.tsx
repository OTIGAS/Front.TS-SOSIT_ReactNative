import { Text, View } from 'react-native'

import { MyStyles } from "./styles";

export function OpenAppointments({ init, end }) {
  const styles = MyStyles();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Disponível</Text>
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