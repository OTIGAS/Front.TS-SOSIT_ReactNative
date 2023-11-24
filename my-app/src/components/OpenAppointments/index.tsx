import { Text, TouchableOpacity, View } from 'react-native'

import { MyStyles } from "./styles";

type OpenAppointmentsProps = {
  init: string;
  end: string;
  onPress: () => void;
};

export function OpenAppointments(props: OpenAppointmentsProps) {
  const styles = MyStyles();

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => props.onPress()}>
      <Text style={styles.title}>Disponível</Text>
      <View style={styles.subContainer}>
        <Text>Inicio</Text>
        <Text>Fim</Text>
      </View>
      <View style={styles.subContainer}>
        <Text>{props.init}</Text>
        <Text>{props.end}</Text>
      </View>
    </TouchableOpacity>
  );
}