import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify,Auth,API,graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports.js';
import { useEffect } from 'react';
import { getUser } from "./src/graphql/queries";
import { createUser } from './src/graphql/mutations';

// Configure the Amplify
Amplify.configure({...awsconfig,Analytics:{disabled:true}});

function App() {

  useEffect(()=>{
    const syncUser = async ()=>{
      // get Authenticated User
      const authUser = await Auth.currentAuthenticatedUser({bypassCache:true});
      
      // Check the user in the dynamoDB
      const authUserId  = authUser.attributes.sub;
      const user = await API.graphql(graphqlOperation(getUser,{ id:authUserId }));
      
      if(user.data.getUser){
        console.log("User already exists");
        return;
      }

      // If Authenticated User not in the our DB just add that user into the Dynamo DB
      const newUser = {
        id:authUserId,
        image:'',
        username:authUser.attributes.email,
        status:"Hey,I'm using whatsapp"
      }
      const newUserResponse = await API.graphql(graphqlOperation(createUser,{ input: newUser }))


    }
    syncUser();
  },[])

  return (
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);
