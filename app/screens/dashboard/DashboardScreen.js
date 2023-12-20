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
import storage from '../../../utils/storage';

// Tips
import ecoTipsAndResources from '../../../utils/tips';
import react from 'react';

const randomTip =
  ecoTipsAndResources[Math.floor(Math.random() * ecoTipsAndResources.length)];

export default function DashboardScreen({ navigation, onLayoutRootView }) {
  const { setViewProduct, logout } = useAuth();

  const [products, setProducts] = useState([]);
  const [loginUser, setLoginUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const [searchValue, setSearchValue] = useState(null);

  const fetchAllProduct = async () => {
    try {
      setLoading(true);
      const products = await productApi.getAllProducts(offset, limit);
      const user = await authApi.getLoginUser();

      setLoginUser(user);
      setProducts((prevProducts) => [...prevProducts, ...products]);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const searchProduct = async () => {
    try {
      setLoading(true);
      const searchResult = await productApi.searchProduct(searchValue);

      setProducts(searchResult);
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
      if (searchValue !== null) {
        searchProduct();
      } else {
        fetchAllProduct();
      }
    }
  }, [navigation, offset, searchValue]);

  const MemoizedItem = react.memo(({ item }) => (
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
  ));

  const renderItem = ({ item }) => <MemoizedItem item={item} />;

  return (
    <View style={dashboardStyles.Container} onLayout={onLayoutRootView}>
      {/* Header */}
      <View style={dashboardStyles.Navigation}>
        <View style={dashboardStyles.InnerContainer}>
          <Text style={[styles.subHeading, { color: '#000' }]}>
            Welcome, {loginUser?.name}
          </Text>
          {/* <Text style={[styles.subHeading, { color: '#000' }]}>Icon</Text> */}
          <TouchableOpacity
            onPress={() => {
              storage.clearToken();
              logout();
            }}
          >
            <Image
              source={{
                uri: loginUser?.avatar,
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={[
            styles.inputWhiteBackground,
            dashboardStyles.HeaderSearchInput,
          ]}
          placeholder="Search"
          placeholderTextColor="#81868C"
          value={searchValue}
          onChangeText={(val) => {
            if (val.length === 0) {
              setProducts([]);
              setSearchValue(null);
            } else {
              setSearchValue(val);
            }
          }}
        />
      </View>

      {/* Dashboard Card */}
      <View style={dashboardStyles.OfferCard}>
        <View style={dashboardStyles.OfferCardInner}>
          <Text style={[styles.subHeading]}>{randomTip.tip}</Text>
          <Text style={[styles.body]}>{randomTip.resource}</Text>
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
          onEndReachedThreshold={0.1}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
