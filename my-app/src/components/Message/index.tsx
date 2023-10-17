import { ReactNode } from "react";
import { styles } from "./styles";

import { Text } from "react-native";

type TextProps = {
  children?: ReactNode;
};

export const Message = (props: TextProps) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  );
};
