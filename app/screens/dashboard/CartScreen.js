// Imports
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

// Styles
import dashboardStyles from '../../../assets/styles/dashboard.css';
import styles from '../../../assets/styles/global.css';
import cartStyles from '../../../assets/styles/cart.css.js';

// Context
import { useAuth } from '../../../context/AuthContext.js';
import CustomButton from '../../components/CustomButton.js';

export default function CartScreen({ onLayoutRootView }) {
  const { removeFromCart, cart } = useAuth();

  let sum = cart.reduce((accumulator, currentObject) => {
    return accumulator + (currentObject.price ? currentObject.price : 0);
  }, 0);

  return (
    <View style={dashboardStyles.Container} onLayout={onLayoutRootView}>
      {/* Header Navigation */}
      <View style={[dashboardStyles.Navigation, { height: 120 }]}>
        <Text
          style={[styles.subHeading, { color: '#000', textAlign: 'center' }]}
        >
          Cart
        </Text>
      </View>

      {/* Checkout Container  */}
      <ScrollView style={cartStyles.CheckoutContainer}>
        <View style={cartStyles.CheckoutInnerContainer}>
          <Text style={[styles.subHeading, { color: '#000', marginBottom: 5 }]}>
            Checkout Products
          </Text>

          {cart.map((product) => (
            <View style={cartStyles.CheckoutItems} key={product.id}>
              <Image
                source={{
                  uri: product.images[0],
                }}
                style={cartStyles.ItemsImage}
              />
              <View>
                <Text style={[styles.body, { color: '#000' }]}>
                  {product.title}
                </Text>
                <Text
                  style={[
                    styles.body,
                    { color: '#000', fontFamily: 'PoppinsBold' },
                  ]}
                >
                  ${product.price}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => removeFromCart(product.id)}
                style={{
                  marginLeft: 'auto',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'PoppinsBold',
                    textDecorationLine: 'underline',
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Checkout Total Container  */}
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: '#fff',
          borderRadius: 5,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={[
                styles.body,
                {
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'PoppinsBold',
                },
              ]}
            >
              Amount Price: ₱ {sum}
            </Text>
          </View>
          <CustomButton
            buttonText={'Checkout'}
            buttonTextStyle={styles.body}
            buttonContainerStyle={[
              dashboardStyles.OfferCardButtonContainer,
              { marginTop: 0 },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
