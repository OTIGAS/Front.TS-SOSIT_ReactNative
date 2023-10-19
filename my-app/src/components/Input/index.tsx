import { ReactNode } from "react";
import { MyStyles } from "./styles";

import { Text, TextInput } from "react-native";

type InputProps = {
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "phone-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  secureTextEntry?: boolean;
  placeholder: string;
  placeholderTextColor: string;
  value: string;
  error?:string;
  onBlur?: () => void;
  onChange?: (text: string) => void;
  setValue?: (text: string) => void;
};

export const Input = (props: InputProps) => {
  const styles = MyStyles();
  return (
    <>
      <TextInput
        style={styles.input}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onBlur={props.onBlur}
        onChangeText={props.onChange}
      />
      {
        props.error && <Text style={styles.error}>{props.error}</Text>
      }
    </>
  );
};
