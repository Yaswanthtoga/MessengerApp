import { View,Button } from 'react-native';
import { Auth } from 'aws-amplify';
import React from 'react'

const SettingScreen = () => {
  return (
    <View style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}} >
      <Button title='Signout' onPress={()=>Auth.signOut()} />
    </View>
  )
}

export default SettingScreen