import { View, Text,Image,StyleSheet, Pressable } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ContactListItem = ({user}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={()=>{}} style={styles.container}>
      <Image
         source={{
           uri:user.image
          }}
         style={styles.image}

      />
      <View style={styles.content} >
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
        </View>
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