// Imports
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';

// Styles
import dashboardStyles from '../../../assets/styles/dashboard.css';
import CustomButton from '../../components/CustomButton';
import styles from '../../../assets/styles/global.css';

export default function DashboardScreen({ onLayoutRootView }) {
  // Test Data
  const DummyTestProducts = Array.from({ length: 20 }, (_, i) => {
    const randomPrice = (Math.random() * (10000 - 5000) + 10).toFixed(2);
    return {
      id: i + 1,
      productImage: require(`../../../assets/images/TestProducts/renzle.jpg`),
      productName: `Product ${i + 1}`,
      productPrice: `₱ ${randomPrice}`,
    };
  });

  return (
    <ScrollView style={dashboardStyles.Container} onLayout={onLayoutRootView}>
      {/* Header */}
      <View style={dashboardStyles.Navigation}>
        <View style={dashboardStyles.InnerContainer}>
          <Text style={[styles.subHeading, { color: '#000' }]}>
            Welcome, Renzle
          </Text>
          <Text style={[styles.subHeading, { color: '#000' }]}>Icon</Text>
        </View>

        <TextInput
          style={[
            styles.inputWhiteBackground,
            dashboardStyles.HeaderSearchInput,
          ]}
          placeholder="Search"
          placeholderTextColor="#81868C"
        />
      </View>

      {/* Dashboard Card */}
      <View style={dashboardStyles.OfferCard}>
        <View style={dashboardStyles.OfferCardInner}>
          <View style={{ width: '60%' }}>
            <Text style={styles.body}>
              Special Limited-Time Offer: Go Green with Savings!{' '}
            </Text>
            <CustomButton
              buttonText={'% Up to 50%'}
              buttonTextStyle={styles.body}
              buttonContainerStyle={dashboardStyles.OfferCardButtonContainer}
            />
          </View>
          <View style={dashboardStyles.OfferCardMascotContainer}>
            {/* <Image
              source={require(
                `../../assets/images/TestProducts/card-mascot.png`,
              )}
              style={dashboardStyles.OfferCardMascotImg}
            /> */}
          </View>
        </View>
      </View>

      {/* Categories */}
      <View style={dashboardStyles.InnerContainer}>
        <Text style={[styles.subHeading, { color: '#000' }]}>Categories</Text>
        <Text style={[styles.body, { color: '#FFCD17' }]}>See all</Text>
      </View>

      <View style={dashboardStyles.ItemsContainer}>
        {DummyTestProducts.map((product) => (
          <View key={product.id} style={dashboardStyles.Items}>
            <Image
              source={product.productImage}
              style={dashboardStyles.ItemsProductImage}
            />

            <View style={dashboardStyles.ItemsProductTextContainer}>
              <Text
                style={[
                  styles.body,
                  { color: '#000', fontFamily: 'PoppinsBold' },
                ]}
              >
                {product.productName}
              </Text>
              <Text style={[styles.body, { color: '#000', marginTop: 0 }]}>
                {product.productPrice}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}
