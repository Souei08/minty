// Styles
import globalStyles from "../../assets/styles/global.css";

// Imports
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>MINTY LOGO</Text>

      <View style={{ alignItems: "center" }}>
        <Text style={[globalStyles.header, { marginBottom: 10 }]}>
          Welcome To Minty
        </Text>
        <Text style={globalStyles.body}>
          Your Gateway to Eco-Friendly Shopping
        </Text>
      </View>

      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={globalStyles.buttonText}>Start Shopping</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
