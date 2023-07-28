import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#0e1117",
  },
   
  codeLists: {
    width: "100%", 
    display: "flex",
    alignItems: "center"
  },

  informText: {
    paddingTop: 16
  }
})

export default style