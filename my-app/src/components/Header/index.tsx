import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { UserContext } from "../../context/UserContext";

import { styles } from "./styles";


type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const { data } = useContext(UserContext);

  const [dark, setDark] = useState<boolean>(false)

  function handlePress() {
    console.log(data)
    console.log(data.nome)
  }

  function handlePressTheme() {
    setDark(!dark)
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={handlePressTheme}>
        {
          dark === true ?
          <Image source={require('./../../assets/dark_mode.png')}/>
          :
          <Image source={require('./../../assets/light_mode.png')}/>
        }
      </TouchableOpacity>
      <Text>{data && data.nome}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image source={require('./../../assets/logout.png')}/>
      </TouchableOpacity>
    </View>
  );
};
