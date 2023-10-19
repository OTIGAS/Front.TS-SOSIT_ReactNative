import { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { MyStyles } from "./styles";

type ButtonProps = {
  children?: ReactNode;
  onPress?: () => void;
};

export const Button = (props: ButtonProps) => {
  const styles = MyStyles();

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
