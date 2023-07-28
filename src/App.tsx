import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import style from './App.style';
import asyncStorageService from "./services/asyncStorage"

import Header from './components/header';
import ScanBtn from './components/scanBtn';
import CodeCard from './components/codeCard';
import Scanner from './components/scanner';

export default function App() {

  const [codes, setCodes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [cameraDisplayed, setCameraDisplayed] = useState(false)

  async function removeCode(index: number): Promise<void> {
    if(!codes.length) return
    setCodes(codes => codes.filter((v, i) => i !== index))
    await asyncStorageService.storeCodes(codes.filter((v, i) => i !== index))
  }

  async function addCode(value: string) {
    if(!value) return
    if(codes.includes(value)) return
    setCodes(codes => [...codes, value])
    await asyncStorageService.storeCodes([...codes, value])
  }

  async function getCodes() {
    let initCodes = await asyncStorageService.getCode()
    setCodes(initCodes)
    setLoading(false)
  }

  useEffect(() => {
    getCodes()
  }, [])

  return (
    <SafeAreaView>
      <View style={style.container}>

        <Header />

        <View style={style.codeLists}>
          {
            codes.length
              ? codes.map((item, index) =>
                <CodeCard
                  key={index}
                  value={item}
                  removeCode={removeCode}
                  index={index} />)
              : loading
              ? <Text style={style.informText}>Loading</Text>
              : <Text style={style.informText}>Let's scan some code 🔥</Text>
          }
        </View>

        <ScanBtn setCameraDisplayed={setCameraDisplayed}/>

        <Scanner 
          displayed={cameraDisplayed}
          setDisplayed={setCameraDisplayed}
          addCode={addCode}
        />
        
      </View>
        
    </SafeAreaView>
  )
}
