import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import Icon from "react-native-vector-icons/AntDesign"

interface Props {
  setCameraDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ScanBtn (props: Props) {
  return (
    <TouchableOpacity style={style.container} onPress={()=>props.setCameraDisplayed(true)}>
      <Icon name="plus" size={40} color={"white"}/>
    </TouchableOpacity>
  )
}