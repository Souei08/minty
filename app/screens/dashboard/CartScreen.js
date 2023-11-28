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

export default function CartScreen() {
  const [checkedItems, setCheckedItems] = useState({});

  // Test Data
  const DummyTestProducts = Array.from({ length: 50 }, (_, i) => {
    return {
      id: i + 1,
      productName: `Product ${i + 1}`,
      productImage: require(`../../../assets/images/TestProducts/renzle.jpg`),
      productPrice: `₱ 200`,
    };
  });

  const totalPrice = Object.values(checkedItems).reduce((acc, isChecked) => {
    if (isChecked) {
      return acc + 100;
    }
    return acc;
  }, 0);

  return (
    <View style={dashboardStyles.Container}>
      {/* Header Navigation */}
      <View style={dashboardStyles.Navigation}>
        <Text
          style={[styles.subHeading, { color: '#000', textAlign: 'center' }]}
        >
          Cart
        </Text>

        <TextInput
          style={[
            styles.inputWhiteBackground,
            dashboardStyles.HeaderSearchInput,
          ]}
          placeholder="Kamuning Street, El Rio Vista Village"
          placeholderTextColor="#81868C"
        />
      </View>

      {/* Checkout Container  */}
      <ScrollView style={cartStyles.CheckoutContainer}>
        <View style={cartStyles.CheckoutInnerContainer}>
          <Text style={[styles.subHeading, { color: '#000', marginBottom: 5 }]}>
            Select All
          </Text>

          {DummyTestProducts.map((product) => (
            <View style={cartStyles.CheckoutItems} key={product.id}>
              <Checkbox
                color="#FFCD17"
                style={cartStyles.ItemsCheckbox}
                value={!!checkedItems[product.id]}
                onValueChange={(val) => {
                  console.log(`Checkbox ID: ${product.id}, Value: ${val}`);

                  setCheckedItems((prevCheckedItems) => {
                    const updatedItems = { ...prevCheckedItems };

                    if (val) {
                      updatedItems[product.id] = true;
                    } else {
                      delete updatedItems[product.id];
                    }

                    return updatedItems;
                  });
                }}
              />

              <Image
                source={product.productImage}
                style={cartStyles.ItemsImage}
              />
              <View>
                <Text style={[styles.body, { color: '#000' }]}>
                  {product.productName}
                </Text>
                <Text
                  style={[
                    styles.body,
                    { color: '#000', fontFamily: 'PoppinsBold' },
                  ]}
                >
                  {product.productPrice}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Checkout Total Container  */}
      <View style={cartStyles.CheckoutContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
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
              Amount Price: ₱ {totalPrice}
            </Text>
          </View>
          <TouchableOpacity
            style={[cartStyles.CheckoutButton, { marginLeft: 10 }]}
          >
            <Text
              style={[
                styles.body,
                { color: '#000', fontFamily: 'PoppinsBold' },
              ]}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
