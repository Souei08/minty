// Imports
import { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Text, View, TextInput, ScrollView, Image } from 'react-native';

// Styles
import dashboardStyles from '../../../assets/styles/dashboard.css';
import styles from '../../../assets/styles/global.css';
import cartStyles from '../../../assets/styles/cart.css.js';

export default function CartScreen() {
  const [isChecked, setChecked] = useState([]);

  // Test Data
  const DummyTestProducts = Array.from({ length: 50 }, (_, i) => {
    return {
      id: i + 1,
      productName: `Product ${i + 1}`,
      productImage: require(`../../../assets/images/TestProducts/renzle.jpg`),
      productPrice: `₱ 100`,
    };
  });

  const FindSelectedItems = (id) => {
    const found = isChecked.find((element) => element.id > id);

    console.log(id);

    return found;
  };

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

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
                value={FindSelectedItems(product.id) ? true : false}
                onValueChange={(val) => {
                  console.log(product.id);

                  setChecked([
                    ...isChecked,
                    {
                      id: product.id,
                      value: val,
                    },
                  ]);

                  // if (val) {
                  //   console.log(isChecked);
                  //   setChecked([
                  //     ...isChecked,
                  //     {
                  //       value: val,
                  //       id: product.id,
                  //     },
                  //   ]);
                  // } else {
                  //   console.log('false');
                  //   // setChecked([
                  //   //   ...isChecked,
                  //   //   {
                  //   //     value: val,
                  //   //     id: product.id,
                  //   //   },
                  //   // ]);
                  // }
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
    </View>
  );
}
