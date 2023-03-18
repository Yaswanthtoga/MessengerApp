import { View, Text,FlatList } from 'react-native'
import React from 'react'
import ChatListItem from '../components/chatlistitem';
import chats from "../data/chats.json";


const ChatsScreen = () => {

  return (
    <FlatList
       data={chats}
       renderItem={({item})=><ChatListItem chat={item} key={item.id}/>}
       style={{backgroundColor:'white'}}
    />
  )
}

export default ChatsScreen;