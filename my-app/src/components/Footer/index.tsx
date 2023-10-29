import { View, TouchableOpacity, Image } from "react-native";

import { MyStyles } from "./styles";

type FooterProps = {
  type: "cliente" | "empresa";
  navigation: any;
};

export const Footer = (props: FooterProps) => {
  const styles = MyStyles();

  function handleClienteHistoric() {
    props.navigation.navigate('HistoricoCliente', {name: 'HistoricoCliente'})
  }

  function handleClienteSearch() {
    props.navigation.navigate('PesquisaCliente', {name: 'PesquisaCliente'})
  }

  function handleClienteProfile() {
    props.navigation.navigate('PerfilCliente', {name: 'PerfilCliente'})
  }

  function handleEmpresaHistoric() {
    props.navigation.navigate('HistoricoEmpresa', {name: 'HistoricoEmpresa'})
  }

  function handleEmpresaSearch() {
    props.navigation.navigate('PesquisaEmpresa', {name: 'PesquisaEmpresa'})
  }

  function handleEmpresaProfile() {
    props.navigation.navigate('PerfilEmpresa', {name: 'PerfilEmpresa'})
  }

  return (
    props.type === "cliente" ? (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleClienteHistoric}>
          <Image
            style={styles.images}
            source={require("./../../assets/historic.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClienteSearch}>
          <Image
            style={styles.images}
            source={require("./../../assets/search.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClienteProfile}>
          <Image
            style={styles.images}
            source={require("./../../assets/person.png")}
          />
        </TouchableOpacity>
      </View>
    )
    :
    (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleEmpresaHistoric}>
          <Image
            style={styles.images}
            source={require("./../../assets/historic.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmpresaSearch}>
          <Image
            style={styles.images}
            source={require("./../../assets/edit_calendar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmpresaProfile}>
          <Image
            style={styles.images}
            source={require("./../../assets/company.png")}
          />
        </TouchableOpacity>
      </View>
    )
  );
};
