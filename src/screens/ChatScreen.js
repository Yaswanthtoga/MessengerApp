import {ImageBackground, StyleSheet, FlatList, View} from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native';
import BG from '../../assets/BG.png';
import Message from '../components/message';
import messages from "../data/messages.json";
import InputBox from '../components/inputbox';
import { useEffect } from 'react';

const ChatScreen = () => {
  
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({title:route.params.name});
  },[route.params.name])

  return (
      <ImageBackground source={BG} style={styles.bg}>
          <FlatList
            data={messages}
            renderItem={({item})=><Message msg={item} key={item.id}/>}
            style={styles.list}
            // inverted
            />
          <InputBox/>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    list:{
        padding:20,
    }
})

export default ChatScreen