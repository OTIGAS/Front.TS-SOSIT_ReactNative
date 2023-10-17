import { ReactNode } from 'react';
import { styles } from "./styles";
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  children?: ReactNode;
  onPress?: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
