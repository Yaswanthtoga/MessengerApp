import { View, Text,Image,StyleSheet, Pressable } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { API,Auth,graphqlOperation } from "aws-amplify";
import { createChatroom, createUserChatroom } from '../../graphql/mutations.js';

const ContactListItem = ({user}) => {
  const navigation = useNavigation();

  const handlePressed = async ()=>{
    // Check that Pressed User is already existed in the chat room

    // Create a ChatRoom
    const newChatRoomData = await API.graphql(graphqlOperation(createChatroom,{ input:{} }));
    if(!newChatRoomData.data?.createChatroom){
      console.log("Chat Room Creation Error");
      return;
    }

    const newChatRoom = newChatRoomData.data?.createChatroom;

    // Add the Pressed User
    await API.graphql(graphqlOperation(createUserChatroom,{ input:{ chatroomId:newChatRoom.id, userId:user.id } }))

    // // Add the Authenticated User
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(graphqlOperation(createUserChatroom,{ input:{ chatroomId:newChatRoom.id, userId:authUser.attributes.sub } }))

    // Navigate to the newly created Chatroom
    navigation.navigate("Chat",{ id:newChatRoom.id });
  }
  return (
    <Pressable onPress={handlePressed} style={styles.container}>
      <Image
         source={{
           uri:user.image
          }}
         style={styles.image}

      />
      <View style={styles.content} >
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{user.username}</Text>
        </View>
        <Text style={{color:'gray'}} numberOfLines={1} >{user.status}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:10,
    marginVertical:5,
    height:70,
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
    marginRight:10,
  },
  content:{
    flex:1,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'lightgray'
  },
  row:{
    flexDirection:'row',
    marginBottom:5
  },
  name:{
    flex:1,
    fontWeight:'bold'
  },
})

export default ContactListItem;