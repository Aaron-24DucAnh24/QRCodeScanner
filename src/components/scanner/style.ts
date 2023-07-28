import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#0e1117"
  },

  camera: {
    width: "100%",
    height: "100%"
  },

  exitBtn: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "silver",
    opacity: 0.8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 20,
  },

  notifyContainer: {
    display: "flex",
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 350,
    right: (Dimensions.get("window").width - 200)/2
  },

  notifyBtn: {
    height: 50,
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "silver",
    margin: 16,
    borderRadius: 8,
    fontSize: 20
  },

  notifyText: {
    color: "#57a6ff",
    fontSize: 20,
    backgroundColor: "silver",
    width: "100%",
    height: 50,
    textAlign: "center",
    lineHeight: 50,
    borderRadius: 8
  },

  blue: {
    backgroundColor: "#57a6ff"
  }
})

export default style