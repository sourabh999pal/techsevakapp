import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ListServ from './comp/ListServ'

const See_all = ({navigation}) => {
  return (
    <>
     <View style={styles.box}>
    <Text style={styles.text}>Service Categories  </Text>
  </View>

  <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ 
        marginBottom: 90 ,
        
      }}
    >
    <TouchableOpacity onPress={() => navigation.navigate('Software')}>
    <ListServ name='software Services' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Hardware')}>
    <ListServ name='Hardware Services' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Desktop_os')}>
    <ListServ name='Desktop Operating Systems' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Lan_services')}>
    <ListServ name='Lan Services' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Print_deliver')}>
    <ListServ name='Prints Delivery' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Drivers')}>
    <ListServ name='Drivers Installation' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Smart_home')}>
    <ListServ name='Smart Homes Setup' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Infra_shifting')}>
    <ListServ name='IT Infra Shifting Help' />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Digital_help')}>
    <ListServ name='Digital Help' />
    </TouchableOpacity>






  
    
     
        
     
     
    </ScrollView>
    </>
   
  )
}

export default See_all

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  }
})