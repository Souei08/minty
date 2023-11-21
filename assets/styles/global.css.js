// Imports
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6F52',
  },

  logo: {
    width: 80,
    height: 70,
  },

  logoText: {
    marginTop: 10,
    fontSize: 43,
    color: '#fff',
    fontFamily: 'PoppinsBold',
  },

  header: {
    marginTop: 5,
    fontSize: 34,
    color: '#fff',
    fontFamily: 'PoppinsBold',
  },

  subHeading: {
    marginTop: 5,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'PoppinsBold',
  },

  body: {
    marginTop: 10,
    fontSize: 14,
    color: '#fff',
    fontFamily: 'PoppinsRegular',
  },

  input: {
    paddingTop: 5,
    borderRadius: 4,
    paddingLeft: 15,
    borderColor: '#fff',
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 20,
    height: 40,
    color: '#fff',
    fontFamily: 'PoppinsRegular',
  },

  inputWhiteBackground: {
    paddingTop: 5,
    borderRadius: 4,
    paddingLeft: 15,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 20,
    height: 40,
    color: '#000',
    backgroundColor: '#F1F1F1',
  },

  buttonContainer: {
    backgroundColor: '#FFCD17',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },

  buttonText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
});

export default styles;
