// Imports
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ABB562",
  },

  header: {
    fontSize: 32,
    marginBottom: 10,
    color: "#fff",
    fontWeight: "900",
  },

  subHeading: {
    fontSize: 24,
    marginBottom: 10,
    color: "#fff",
  },

  body: {
    fontSize: 15,
    marginBottom: 10,
    color: "#fff",
  },

  input: {
    borderRadius: 10,
    paddingLeft: 15,
    borderColor: "#fff",
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 20,
    height: 40,
    color: "#fff",
  },

  buttonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },

  buttonText: {
    color: "#ABB562",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
