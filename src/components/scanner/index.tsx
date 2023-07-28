import { Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera"
import Icon from "react-native-vector-icons/AntDesign";
import style from "./style";
import { useEffect, useState } from "react";

interface Props {
  displayed: boolean,
  setDisplayed: React.Dispatch<React.SetStateAction<boolean>>,
  addCode: (value: string) => Promise<void>
}

export default function Scanner (props: Props) {

  const [code, setCode] = useState("")
  const [notifyDisplayed, setNotifyDisplayed] = useState(false)

  useEffect(()=>{
    setCode("")
  }, [notifyDisplayed])

  useEffect(()=>{
    setNotifyDisplayed(false)
  }, [props.displayed])

  return (
    <View style={props.displayed?style.container:{display: "none"}}>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        style={style.camera}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          if(barcodes.length && !code) {
            setCode(barcodes[0].dataRaw)
            setNotifyDisplayed(true)
          }
        }}
      >
      </RNCamera>
 
      <View style={notifyDisplayed?style.notifyContainer:{display: "none"}}>
        <Text style={style.notifyText}>{code}</Text>

        <TouchableOpacity 
          style={[style.notifyBtn, style.blue]}
          onPress={async ()=> {
            await props.addCode(code)
            props.setDisplayed(false)
          }}
        ><Text>Add</Text></TouchableOpacity>

        <TouchableOpacity 
          style={style.notifyBtn}
          onPress={()=>{
            setNotifyDisplayed(false)
            setCode("")
          }}
        ><Text>Try agains</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={style.exitBtn}
        onPress={()=>{
          props.setDisplayed(false)
        }}>
        <Icon name="close" size={40} color="black"/>
      </TouchableOpacity>

    </View>
  )
}