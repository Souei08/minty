// Imports
import { Text, TouchableOpacity } from "react-native";

// Styles
import globalStyles from "../../assets/styles/global.css";

export default function CustomButton({ onPress, buttonText }) {
  return (
    <TouchableOpacity style={globalStyles.buttonContainer} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
