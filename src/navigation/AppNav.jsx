import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native';
import React, { useEffect, useState } from 'react';

import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './Tabnavigation';


import AsyncStorage from '@react-native-async-storage/async-storage';



const AppNav = () => {
  const [isLogged, setIsLogged] = useState(false);

  const [logged, setLogged] = useState(false);

  const [loading, setLoading] = useState(true);

  const Authorized = async () => {
    try {
      const data = await AsyncStorage.getItem("keepLoggedIn");
      setIsLogged(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    Authorized();

    setTimeout(() => setLoading(false), 1000)
  }, [])



  return (
    loading ? <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: '90%' }} />
      :

      <NavigationContainer >
        {isLogged ? <Tabnavigation /> : <Navigation />}
      </NavigationContainer>




  )
}

export default AppNav

const styles = StyleSheet.create({})