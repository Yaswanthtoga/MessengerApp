import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContactListItem from '../components/contactlistitem';
import { API,graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const ContactScreen = () => {

  // Data Driven through the AWS Amplify
  const [users,setUsers] = useState([]);

  // Query the list of users
  useEffect(()=>{
    API.graphql(graphqlOperation(listUsers)).then(
      (result)=>{
        setUsers(result.data?.listUsers?.items);
      }
    );
  },[])

  console.log(users);

  return (
    <FlatList
       data={users}
       renderItem={({item})=><ContactListItem user={item} key={item.id}/>}
       style={{backgroundColor:'white'}}
    />
  )
}

export default ContactScreen