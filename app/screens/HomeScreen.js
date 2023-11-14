// Imports
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// Styles
import globalStyles from "../../assets/styles/global.css";

// Components
import MintyLogo from "../components/MintyLogo";
import CustomButton from "../components/CustomButton";

export default function Home({ navigation }) {
  const handleNavigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={globalStyles.container}>
      <MintyLogo />
      <View style={{ alignItems: "center" }}>
        <Text style={[globalStyles.header, { marginBottom: 10 }]}>
          Welcome To Minty
        </Text>
        <Text style={[globalStyles.body, { marginBottom: 30 }]}>
          Your Gateway to Eco-Friendly Shopping
        </Text>

        <CustomButton
          onPress={handleNavigateLogin}
          buttonText="Start Shopping"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
