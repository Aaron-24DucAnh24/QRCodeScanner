import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import style from "./style";

interface Props {
  value: string,
  removeCode: (index: number) => Promise<void>,
  index: number
}

export default function CodeCard (props: Props) {
  return (
    <TouchableOpacity 
      style={style.container} 
      onLongPress={() => props.removeCode(props.index)}
    >
      <Icon name="right" size={30} color="#57A6FF"/>
      <Text style={style.text}>{props.value}</Text>
    </TouchableOpacity>
  )
}