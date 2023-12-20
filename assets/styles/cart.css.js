// Imports
import { StyleSheet } from 'react-native';

const cartStyles = StyleSheet.create({
  CheckoutContainer: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    maxHeight: 400,
  },

  CheckoutInnerContainer: {
    padding: 20,
  },

  CheckoutItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  ItemsCheckbox: {
    padding: 10,
    marginRight: 10,
  },
  ItemsImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 5,
  },
});

export default cartStyles;
