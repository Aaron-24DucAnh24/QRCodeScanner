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
    backgroundColor: "silver",
    opacity: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 20,
  },

  notifyContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 350,
    paddingHorizontal: 16
  },

  notifyBtn: {
    height: 40,
    width: 120,
    display: "flex",
    backgroundColor: "#57a6ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    borderRadius: 8,
    fontSize: 20,
  },

  notifyText: {
    color: "#57a6ff",
    fontSize: 20,
    backgroundColor: "white",
    paddingHorizontal: 8,
    maxWidth: "100%",
    overflow: "hidden",
    height: 50,
    textAlign: "center",
    lineHeight: 50,
    borderRadius: 8
  },
})

export default style