// Styles
import globalStyles from "../../assets/styles/global.css";

// Imports
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={globalStyles.logo}
          source={require("../../assets/images/icons/icon.png")}
        />
        <Text style={globalStyles.logoText}>Minty</Text>
      </View>

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
