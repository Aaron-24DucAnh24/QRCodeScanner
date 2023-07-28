import { View, Text } from "react-native";
import style from "./style";
import Icon from "react-native-vector-icons/AntDesign"

export default function Header () {
  return (
    <View style={style.container}>
      <Icon name="qrcode" size={30} color={"#57a6ff"}/>
      <Text style={style.text}>QR CODE SCANNER</Text>
    </View>
  )
}