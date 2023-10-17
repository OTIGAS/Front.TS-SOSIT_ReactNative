import { View, Text, Button, TextInput } from "react-native";
import { styles } from "./styles";

import { useState } from "react";

export function Home() {
  const [message, setMessage] = useState<string | null>("");

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#6B6B6B"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#6B6B6B"
        />

        <Button title="Enviar" />

        <Text style={styles.message}>{message}</Text>
      </View>
    </>
  );
}
