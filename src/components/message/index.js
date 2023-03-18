import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({msg}) => {
  
  const isMyMessage = ()=>{
    return msg.user.id==='u1'
  }  
    
  return (
    <View style={[styles.container,{
        backgroundColor:isMyMessage()?'#DCF8C5':'white',
        alignSelf:isMyMessage()?'flex-end':'flex-start'
    }]
    }>
      <Text style={styles.text} >{msg.text}</Text>
      <Text style={styles.time}>{dayjs(msg.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container:{
      margin:5,
      padding:10,
      borderRadius:10,
      maxWidth:'80%',
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.15,
      shadowRadius: 1.00,
      elevation: 1
    },
    time:{
        color:'gray',
        alignSelf:'flex-end'
    }
})