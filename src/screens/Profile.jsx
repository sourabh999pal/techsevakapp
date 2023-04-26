import { StyleSheet, Text, TouchableOpacity, View , ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { StackActions, NavigationActions } from 'react-navigation';

import url from '../common';
import Demo from '../Demo';


const Profile = ({ navigation }) => {
  const value = Demo();
  const host = url.nodeUrl;

  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(null);
  const [userdata, setUserdata] = useState(null);




  const Logout = async () => {
    setLoading(true);
    AsyncStorage.clear();
    await GoogleSignin.signOut();
    
    navigation.reset({
      index: 0,
      actions:[navigation.navigate({routname:'navigation'})]
    });
    setLoading(false);
  }

  const userdetail = async () => {
   
    const _id = value._j._id;
    
    let result = await fetch(host + `/users/userdata/${_id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    })
    const response = await result.json();
    
    if (response.status == 200) {
        
        await AsyncStorage.setItem("userdata", JSON.stringify(response.result));
        setUserdata(response.result);
        setLoading(false);
    
    }
  }

  useEffect(() => {
    GoogleSignin.configure();
    setLoading(true);
    setTimeout(() => {
       userdetail() 
      }, 1000)
  }, [])

  return (
    <View>
      <View style={styles.textvox}>
        <Text style={styles.textbok}>Profile</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, height: 1.5, backgroundColor: 'black' }} />
      </View>

      {loading ?
        <ActivityIndicator size="large" color="#E71615" style={{ marginTop: '90%' }} />
        : <>
          <View style={{

            width: '100%',
            backgroundColor: 'white',
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20
          }}>
            <Text style={{
              color: 'black',
              margin: 30,
              fontSize: 23,
              alignSelf:'center',
              
            }}>{userdata.name}</Text>
          </View>
          <View style={{
            width: '100%',

          }}>
            <Text style={styles.text}>Email : {userdata.email}</Text>
            
            {/* <TouchableOpacity onPress={Logout}>
              <Text style={styles.text2}>LogOut</Text>
            </TouchableOpacity> */}

          </View>
        </>
      }



    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  textbok: {
    color: '#1c3857',
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center'
  },
  textvox: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    margin: 7
  },
  text2: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf:'center',
    color: 'white',
    margin: 7,
    top:300,
    backgroundColor:'black',
    padding:10,
    borderRadius:20,
  }
})