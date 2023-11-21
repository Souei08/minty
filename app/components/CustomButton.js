// Imports
import { Text, TouchableOpacity } from 'react-native';

// Styles
import globalStyles from '../../assets/styles/global.css';

export default function CustomButton({
  onPress,
  buttonText,
  buttonContainerStyle,
  ButtonTextStyle,
}) {
  return (
    <TouchableOpacity
      style={[globalStyles.buttonContainer, buttonContainerStyle]}
      onPress={onPress}
    >
      <Text style={[globalStyles.buttonText, ButtonTextStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}
