import { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from "./styles";

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
