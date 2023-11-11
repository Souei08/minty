import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ABB562",
  },
  header: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 10,
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
