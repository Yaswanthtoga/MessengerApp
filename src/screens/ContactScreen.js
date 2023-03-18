import { View, Text, FlatList } from 'react-native'
import React from 'react'
import chats from "../data/chats.json";
import ContactListItem from '../components/contactlistitem';

const ContactScreen = () => {
  return (
    <FlatList
       data={chats}
       renderItem={({item})=><ContactListItem user={item.user} key={item.id}/>}
       style={{backgroundColor:'white'}}
    />
  )
}

export default ContactScreen