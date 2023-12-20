// Imports
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

// Styles
import styles from '../../../assets/styles/global.css';
import dashboardStyles from '../../../assets/styles/dashboard.css';

// Context
import { useAuth } from '../../../context/AuthContext';
import CustomButton from '../../components/CustomButton';

// Api
import productApi from '../../../api/products/product.api';

export default function ProductDetailScreen({ navigation, onLayoutRootView }) {
  const { viewProduct, addToCart, cart } = useAuth();

  const [product, setProduct] = useState(null);

  const fetchOneProduct = async () => {
    try {
      const oneProduct = await productApi.getOneProduct(viewProduct);

      setProduct(oneProduct);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchOneProduct();
  }, [viewProduct, cart]);

  return (
    <View
      style={[
        dashboardStyles.Container,
        {
          paddingTop: 40,
          alignItems: 'center',
          backgroundColor: '#F0F1F2',
        },
      ]}
      onLayout={onLayoutRootView}
    >
      <CustomButton
        onPress={() => navigation.navigate('Home')}
        buttonText={'Back'}
        buttonTextStyle={styles.body}
        buttonContainerStyle={[
          dashboardStyles.OfferCardButtonContainer,
          { alignSelf: 'flex-start', marginBottom: 30, marginLeft: 30 },
        ]}
      />

      <Image
        source={{
          uri: product?.images[0],
        }}
        style={{
          width: 250,
          height: 250,
          borderRadius: 3,
          borderWidth: 2,
          borderColor: '#cccc',
        }}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          marginTop: 20,
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'PoppinsBold',
            marginBottom: 10,
            textAlign: 'center',
          }}
        >
          {product?.title}
        </Text>
        <Text
          style={{
            backgroundColor: '#F0F1F2',
            fontSize: 32,
            fontFamily: 'PoppinsBold',
            width: '100%',
            textAlign: 'center',
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          ${product?.price}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'PoppinsRegular',
            textAlign: 'left',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'PoppinsBold',
            }}
          >
            Description:
          </Text>{' '}
          {product?.description}
        </Text>

        <CustomButton
          onPress={() =>
            cart.some((obj) => obj.id === product.id) === false &&
            addToCart(product)
          }
          buttonText={
            cart.some((obj) => obj.id === product.id)
              ? 'Added to cart'
              : 'Add to cart'
          }
          buttonTextStyle={styles.body}
          buttonContainerStyle={[
            dashboardStyles.OfferCardButtonContainer,
            { width: '100%' },
            cart.some((obj) => obj.id === product.id) && {
              backgroundColor: '#ccc',
            },
          ]}
        />
      </View>
    </View>
  );
}
