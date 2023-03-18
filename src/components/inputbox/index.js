import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const InputBox = () => {
  
  const [newMessage,setNewMessage] = useState('');
  const onSend = ()=>{
    console.warn(newMessage);
    setNewMessage('');
  }  
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name='plus' size={24} color='royalblue'/>
      <TextInput value={newMessage} onChangeText = {setNewMessage} style={styles.input} placeholder='type your message...' />
      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={20} color='white'/>
    </SafeAreaView>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        paddingHorizontal:10,
        alignItems:'center'
    },
    input:{
        flex:1,
        backgroundColor:'white',
        padding:5,
        paddingHorizontal:10,
        marginHorizontal:10,
        borderRadius:50,
        borderColor:'lightgray',
        borderWidth:StyleSheet.hairlineWidth,
        overflow:'hidden'
    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:50,
        alignSelf:'center',
    }
})