// Imports
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// Styles
import globalStyles from "../../assets/styles/global.css";

export default function DashboardScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Dashboard</Text>
      <StatusBar style="auto" />
    </View>
  );
}
