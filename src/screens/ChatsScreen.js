import { View, Text,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import ChatListItem from '../components/chatlistitem';
import chats from "../data/chats.json";
import { API,Auth,graphqlOperation } from 'aws-amplify';
import { listChatrooms } from "./queriesChat.js";


const ChatsScreen = async () => {

  useEffect(()=>{
    const fetchData = async ()=>{
      const authUser = await Auth.currentAuthenticatedUser();
      const result = await API.graphql(graphqlOperation(listChatrooms,{ id: authUser.attributed.sub }));
      console.log(result);
    }

    fetchData();
  },[])

  return (
    <FlatList
       data={chats}
       renderItem={({item})=><ChatListItem chat={item} key={item.id}/>}
       style={{backgroundColor:'white'}}
    />
  )
}

export default ChatsScreen;