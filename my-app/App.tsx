import { ScrollView } from "react-native";

import { PostCliente } from "./src/api/Usuario/PostCliente";
import { PostEmpresa } from "./src/api/Usuario/PostEmpresa";
import { AuthenticationCliente } from "./src/api/Usuario/Authentication";

export default function App() {
  return (
    <ScrollView>
      <PostCliente />
      <PostEmpresa />
      <AuthenticationCliente />
    </ScrollView>
  );
}
