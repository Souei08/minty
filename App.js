// Styles
import { Link } from "expo-router";
import globalStyles from "./assets/styles/global.css";

// React Native Imports
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text>MINTY LOGO</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={[globalStyles.header, { marginBottom: 10 }]}>
          Welcome To Minty
        </Text>
        <Text style={globalStyles.paragraph}>
          Your Gateway to Eco-Friendly Shopping
        </Text>
      </View>
      <Link href="/login" asChild>
        <TouchableOpacity style={globalStyles.buttonContainer}>
          <Text style={globalStyles.buttonText}>Start Shopping</Text>
        </TouchableOpacity>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}
