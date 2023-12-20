// Imports
import { Text, View } from 'react-native';

// Styles
import styles from '../../../assets/styles/global.css';
import dashboardStyles from '../../../assets/styles/dashboard.css';

// Third Party Components
import CustomButton from '../../components/CustomButton';

export default function ThankYouScreen({ navigation, onLayoutRootView }) {
  return (
    <View
      style={[styles.container, { paddingHorizontal: 30 }]}
      onLayoutRootView={onLayoutRootView}
    >
      <Text style={[styles.header, { padding: 0, margin: 0 }]}>
        Thank you ordering in minty.
      </Text>
      <Text style={styles.body}>
        Thank you for shopping with us! Your order is confirmed and on its way.
        Here are the details:.
      </Text>

      <CustomButton
        onPress={() => navigation.navigate('Home')}
        buttonText={'Return To Dashboard'}
        buttonTextStyle={styles.body}
        buttonContainerStyle={[
          dashboardStyles.OfferCardButtonContainer,
          { width: '100%' },
        ]}
      />
    </View>
  );
}
