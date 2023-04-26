import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native';

import Tabnavigation from './src/navigation/Tabnavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

//introapp imports here 
import AppIntroSlider from 'react-native-app-intro-slider'
import AppNav from './src/navigation/AppNav';

import Demo from './src/Demo';

var screenSize = Dimensions.get('window');
var screenWidth = screenSize.width;
var screenHeight = screenSize.height;
var screenHalfHeight = screenSize.height * 0.465;
var screenHalfWidth = screenSize.width * 0.5;

const App = () => {


  const [isLogged, setIsLogged] = useState(false);
  const [realshow, setRealshow] = useState(true);

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

    // setTimeout(() => setLoading(false), 1000)
  }, [])

  const On_done = () => {
    setIsLogged(true);
  }

  const slides = [
    {
      key: 1,
      title: 'Global eNetworks Ltd.',
      text: 'fast and very trustable company by indian navy , army',
      image: require('./android/app/src/main/assets/2.png'),
      backgroundColor: '#023047',
    },
    {
      key: 2,
      title: 'Now open to work for public sector ',
      text: 'We provides small services for offices and Homes ',
      image: require('./android/app/src/main/assets/3.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Software / hardware Troubleshootings services',
      text: 'Now ready to solve your hardship ',
      image: require('./android/app/src/main/assets/4.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];

  const renderSlide = ({ item }) => {
    return (
      <View style={{ backgroundColor: item.backgroundColor, height: screenHeight }}>
        <View style={styles.imageview}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.imageview2}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.text}>{item.text}</Text>

        </View>

      </View>
    )
  }


  if (isLogged) {
    return (
      <ToastProvider>
        <Main_application />
      </ToastProvider>
    )
  } else {
    return (
      
      <AppIntroSlider
      data={slides}
      renderItem={renderSlide}
      onDone={On_done}
    />
    )
  }

}

const Main_application = () => {
  return (
    <AppNav />
  )
}

export default App





const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  imageview: {
    width: '100%',
    height: screenHalfHeight,
    paddingHorizontal:10,
    marginTop: 20,
  },
  imageview2: {
    width: '100%',
    height: screenHalfHeight,
    paddingHorizontal:30,
    marginTop: 25,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    marginBottom:20,
    textTransform:'uppercase',
    fontWeight:'bold',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    
  }
})