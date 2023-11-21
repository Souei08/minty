// Imports
import { Image, Text, View } from 'react-native';

// Styles
import globalStyles from '../../assets/styles/global.css';

export default function MintyLogo() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
      }}
    >
      <Image
        style={globalStyles.logo}
        source={require('../../assets/images/icons/icon.png')}
      />
      <Text style={[globalStyles.logoText, { padding: 0 }]}>Minty</Text>
    </View>
  );
}
