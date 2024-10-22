import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Button, Modal } from 'react-native';
import {ModalPassword} from './src/components/modal'
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//Inicio do app
export default function App(){
  const[size,setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] =useState(false)

  //Funçaõ de gerar senha 
  function generatePassword(){
    let password = "";
    for(let i = 0,n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
    
  }

//Container tela

  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
        style={{ height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#F0F8FF'
        minimumTrackTintColor='#cfa0f9'
        thumbTintColor='#F8F8FF'
        value={size}
        onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() =>setModalVisible(false)}/>
      </Modal>

    </View>
  )

}

//Constante de estilo css
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#1C1C1C",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom:60,
    width: "70%",
    height:"50%"
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor:"#1C1C1C"
  },

  button:{
    backgroundColor :"#F0F8FF",
    width:"80%",
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:8,
    marginBottom:18
  },
  buttonText:{
    color:"	#000000",
    fontSize:20,
  },
  title:{
    fontSize: 20,
    fontWeight:"bold",
    color:"#F0F8FF"
  }
  

})