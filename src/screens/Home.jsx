import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, BackHandler,Dimensions , SafeAreaView, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react';

import { useFocusEffect } from '@react-navigation/native';


import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import { Searchbar } from 'react-native-paper';
import Services from '../component/Services';
import Offers from '../component/Offers';
import url from '../common';
import Demo from '../Demo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


var screenSize = Dimensions.get('window');
var screenWidth = screenSize.width;
var screenHeight = screenSize.height;

const Home = ({ navigation }) => {

  const value = Demo();
  const host = url.nodeUrl;

  const [slide, setSlide] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(null);
  const [userdata, setUserdata] = useState(null);


  const Logout = async () => {
    setLoading(true);
    AsyncStorage.clear();
    await GoogleSignin.signOut();
    navigation.navigate('navigation');
    // navigation.reset({
    //   index: 0,
    //   actions:[navigation.navigate({routname:'navigation'})]
    // });
    setLoading(false);
  }

  const userdetail = async () => {
   
    const _id = value._j._id;
    console.log(_id)
    
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

  const onChangeSearch = query => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = React.useState('');

  let iPath = {
    image1: require('../../android/app/src/main/assets/1.jpg'),
    image2: require('../../android/app/src/main/assets/hardware.png'),
    image3: require('../../android/app/src/main/assets/lan.png'),
    image4: require('../../android/app/src/main/assets/shift.png'),
    image5: require('../../android/app/src/main/assets/consulation.png'),
    image6: require('../../android/app/src/main/assets/software.png')
  };

  // backbutton action //
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert("Stop", "Are You sure you want to go back", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => BackHandler.exitApp()
          }
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  return (
    <SafeAreaView>

      {loading ?
        <ActivityIndicator size="large" color="#E71615" style={{ marginTop: '90%' }} />
        :
    <View style={{ backgroundColor: 'white', height: screenHeight }}>
      <View style={styles.userbox}>
              <View style={styles.welcome}>
                <Text numberOfLines={1} style={{ color: 'black', fontSize: 32, fontWeight: '400', width: '85%' }}>Hi {(userdata != null) && userdata.name} </Text>
                <Text style={{ color: 'black', fontSize: 36, fontWeight: '700' }}>Welcome back 👋</Text>

                <TouchableOpacity style={styles.dotbackground} onPress={() => setSlide(!slide)}>
                  <View style={styles.parentdot}>
                    <Icon2 name="ellipsis-vertical" color='black' size={20} />
                  </View>
                </TouchableOpacity>

              </View>

            </View>

            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 1,
              transition: 'right 1s',
              right: slide ? 0 : '-100%',

            }}>
              <View style={{
                width: '75%',
                height: '100%',
                backgroundColor: 'white',
                position: 'absolute',
                right: slide ? 0 : '-100%',
                zIndex: 1,
                transition: '2s',
                paddingVertical: 20,
                paddingHorizontal: 10,
              }}>
                <TouchableOpacity onPress={() => setSlide(!slide)}>
                  <Icon name="closecircle" size={30} color='#7F7F7F' style={{
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    borderColor: '#ccc',
                    borderBottomWidth: 1,

                  }} />
                </TouchableOpacity>


                <TouchableOpacity onPress={Logout}>
                  <Text style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    paddingHorizontal: 10,
                    paddingVertical: 10
                  }}>Logout</Text>
                </TouchableOpacity>
                
                
                
              </View>
            </View> 

      <View>
        <View style={styles.categorysty}>
          <Text style={styles.categorytext}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('See_all')}>
            <Text style={styles.seeall}>See all...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >


        <TouchableOpacity onPress={() => navigation.navigate('Software')}>
          <Services name='Software' color='#1c3857' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Hardware')}>
          <Services name='Hardware' color='#FEA700' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Desktop_os')}>
          <Services name='Desktop Os' color='#4ECDF9' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lan_services')}>
          <Services name='LAN Services' color='#FE4B87' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Print_deliver')}>
          <Services name='Prints Deliver' color='#1c3857' />
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.navigate('Drivers')}>
          <Services name='Drivers' color='#FEA700' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Smart_home')}>
          <Services name='Smart Homes' color='#4ECDF9' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Infra_shifting')}>
          <Services name='IT Infra Shifting' color='#FE4B87' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Digital_help')}>
          <Services name='Digital Help' color='#FE4B87' />
        </TouchableOpacity>

      </ScrollView>


      <View style={styles.blue}>
        <View style={{flexDirection:'row' }}>
          <Text style={styles.trends}>Trending (Digital Help)</Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate('See_al')}>
            <Text style={styles.see}>See all</Text>
          </TouchableOpacity> */}
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Offers name='Prints deliver ' price='430' path={iPath.image1} />
          <Offers name='SSD install' price='420' path={iPath.image2} />
          <Offers name='Wifi Extend' price='430' path={iPath.image3} />
          <Offers name='Shift Hardware' price='420' path={iPath.image4} />
          <Offers name='Consultation' price='430' path={iPath.image5} />
          <Offers name='OS Install' price='420' path={iPath.image6} />
        </ScrollView>

      </View>



    </View>
}
</SafeAreaView>

  )
}

export default Home




const styles = StyleSheet.create({
  categorytext: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1c3857',
  },
  categorysty: {
    flexDirection: 'row',
    padding: 20,
    gap:screenWidth/2,
  },
  seeall: {
    fontSize: 13,
    color: '#edc12d',
    fontWeight: '800',
    
    paddingTop: 5
  },
  blue: {
    backgroundColor: '#1c3857',
    marginBottom: 60,
    width: screenWidth,
    borderTopLeftRadius: 40,
    paddingBottom: 70,
  },
  trends: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 15
  },
  see: {
    color: '#edc12d',
    fontSize: 18,
    marginTop: 35,
    marginRight: 35,
    marginBottom: 15

  },
  searchbar: {
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'blue',
  },
  userbox: {
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25
  },
  userboxbg: {
    width: '10%',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  },

  welcome: {
    width: '90%',
    // height: '60%',
    marginHorizontal: '5%',
    // position: 'absolute',
    // top: '35%'
    marginTop: 30
  },
  dots: {
    color: 'black',
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    top: '22%',
    left: '20%',


  },
  quick: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
  },
  dotbackground: {
    position: 'absolute',
    right: '1%',
    top: '4%',
    backgroundColor: 'rgba(231, 22, 21, 0.2)',
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  parentdot: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})