// Imports
import { StyleSheet } from 'react-native';

const dashboardStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F0F1F2',
  },

  Navigation: {
    paddingTop: 60,
    height: 186,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
  },

  InnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },

  HeaderSearchInput: {
    fontFamily: 'PoppinsRegular',
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },

  OfferCard: {
    backgroundColor: '#4F6F52',
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 30,
    borderRadius: 10,
    position: 'relative',
  },

  OfferCardInner: {
    display: 'flex',
    flexDirection: 'row',
  },

  OfferCardButtonContainer: {
    marginTop: 20,
    width: 108,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  OfferCardMascotContainer: {
    position: 'absolute',
    right: -20,
    bottom: -20,
  },

  OfferCardMascotImg: {
    width: 150,
    height: 155,
  },

  ItemsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignitems: 'flex-start',
    marginLeft: 35,
    marginVertical: 10,
  },

  Items: {
    width: '50%',
    marginVertical: 10,
  },

  ItemsProductImage: {
    borderRadius: 10,
    width: 155,
    height: 150,
    resizeMode: 'cover',
  },

  ItemsProductTextContainer: {
    width: 155,
  },
});

export default dashboardStyles;
