import { View, Text } from "react-native";
import { MyStyles } from "./styles";

type CommitmentProps = {
  usuario: string;
  agenda: string;
  dia: string;
  horaInicio: string;
  horaFim: string;
}

export function Commitment(props: CommitmentProps) {
  const styles = MyStyles();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>{props.usuario}</Text>
        <Text style={styles.textTwo}>{props.agenda}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>{props.dia}</Text>
        <Text style={styles.textTwo}>{`${props.horaInicio} - ${props.horaFim}`}</Text>
      </View>
    </View>
  );
}