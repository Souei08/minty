// Imports
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Styles
import dashboardStyles from '../../../assets/styles/dashboard.css';
import styles from '../../../assets/styles/global.css';

// Api
import authApi from '../../../api/auth/auth.api';
import productApi from '../../../api/products/product.api';

// Context
import { useAuth } from '../../../context/AuthContext';

// Components
import CustomButton from '../../components/CustomButton';

export default function DashboardScreen({ navigation, onLayoutRootView }) {
  const { setViewProduct } = useAuth();

  const [products, setProducts] = useState([]);
  const [loginUser, setLoginUser] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  const fetchAllProduct = async () => {
    try {
      const products = await productApi.getAllProducts(offset, limit);
      const user = await authApi.getLoginUser();

      setLoginUser(user);
      setProducts((prevProducts) => [...prevProducts, ...products]);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleViewProduct = async (id) => {
    await setViewProduct(id);
    await navigation.navigate('ProductDetails');
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  useEffect(() => {
    if (!loading) {
      console.log('Getting Products Processing...');
      fetchAllProduct();
    } else {
      console.log('Standby..');
    }
  }, [navigation, offset]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={dashboardStyles.Items}
      onPress={() => handleViewProduct(item.id)}
    >
      <Image
        source={{ uri: item.images[0] }}
        style={dashboardStyles.ItemsProductImage}
      />

      <View style={dashboardStyles.ItemsProductTextContainer}>
        <Text
          style={[styles.body, { color: '#000', fontFamily: 'PoppinsBold' }]}
        >
          {item.title}
        </Text>
        <Text style={[styles.body, { color: '#000', marginTop: 0 }]}>
          $ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={dashboardStyles.Container} onLayout={onLayoutRootView}>
      {/* Header */}
      <View style={dashboardStyles.Navigation}>
        <View style={dashboardStyles.InnerContainer}>
          <Text style={[styles.subHeading, { color: '#000' }]}>
            Welcome, {loginUser?.name}
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
          <Text style={[styles.subHeading, { textAlign: 'center' }]}>
            Special Limited-Time Offer: Go Green with Savings!{' '}
          </Text>
          <CustomButton
            buttonText={'% Up to 50%'}
            buttonTextStyle={styles.body}
            buttonContainerStyle={dashboardStyles.OfferCardButtonContainer}
          />
        </View>
      </View>

      {/* Categories */}
      <View style={dashboardStyles.InnerContainer}>
        <Text style={[styles.subHeading, { color: '#000' }]}>Products</Text>
      </View>

      <View style={dashboardStyles.ItemsContainer}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
