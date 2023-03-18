import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotImplementedScreen from '../screens/NotImplementedScreen.js'
import ChatsScreen from '../screens/ChatsScreen.js';
import {Ionicons,Entypo} from '@expo/vector-icons';
import SettingScreen from "../screens/SettingScreen.js";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Chats' screenOptions={{
      headerStyle:{backgroundColor:'whitesmoke'},
      tabBarStyle:{backgroundColor:'whitesmoke'}
    }}>
      <Tab.Screen name="Status" component={NotImplementedScreen}
         options={{
            tabBarIcon:({ color, size }) => (
                <Ionicons name="logo-whatsapp" size={size} color={color} />
              ),
         }}
      />
      <Tab.Screen name="Calls" component={NotImplementedScreen}
        options={{
        tabBarIcon:({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen name="Camera" component={NotImplementedScreen}
        options={{
        tabBarIcon:({ color, size }) => (
            <Ionicons name="camera-outline" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen name="Chats" component={ChatsScreen}
        options={({ navigation })=>(
          {
            tabBarIcon:({ color, size }) => (
                <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
                ),
            headerRight:()=>(
              <Entypo
                onPress={()=>navigation.navigate('Contact')}
                name="new-message"
                size={18}
                color={"royalblue"}
                style={{ marginRight: 15 }}
             />
            )
        }
        )}
      />
      <Tab.Screen name="Settings" component={SettingScreen}
        options={{
        tabBarIcon:({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator