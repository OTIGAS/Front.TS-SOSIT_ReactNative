import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { MyStyles } from "./styles";

import { ThemaContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/UserContext";

type HeaderProps = {
  screen: string;
};

export const Header = (props: HeaderProps) => {
  const { data } = useContext(UserContext);
  const { theme, handleThemeChange } = useContext(ThemaContext);

  function handlePressLogout() {
    if(data) {
      console.log(data)
      console.log(data.nome)
    }
  }

  function handlePressCreateAccount() {
    if(data) {
      console.log(data)
      console.log(data.nome)
    }
  }

  const styles = MyStyles();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={handleThemeChange}>
        {
          theme === 'dark' ?
          <Image source={require('./../../assets/dark_mode.png')}/>
          :
          <Image source={require('./../../assets/light_mode.png')}/>
        }
      </TouchableOpacity>
      <Text style={styles.title}>{props.screen && props.screen}</Text>
      {
        props.screen === 'Login' ?
        <TouchableOpacity style={styles.button} onPress={handlePressCreateAccount}>
          <Image source={require('./../../assets/add.png')}/>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.button} onPress={handlePressLogout}>
          <Image source={require('./../../assets/logout.png')}/>
        </TouchableOpacity>
      }
    </View>
  );
};
