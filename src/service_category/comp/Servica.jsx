import { StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native'
import React from 'react'

import { Avatar } from 'react-native-paper';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native-paper';


var screenSize = Dimensions.get('window');
var screenWidth = screenSize.width;
var screenHalfWidth = screenSize.width * 0.465;


const Servica = ({ name, price , navigation}) => {
  const imgInstall = require('../../../android/app/src/main/assets/easy-installation.png')
  const submit = () => {
    console.log('working')
  }
  return (
    
    <TouchableOpacity onPress={() => navigation.navigate('requestform', { servicename: name , price:price }) }>
 <View style={styles.servList_parent}>
      <View style={styles.servList_imgpart}>
        <Image source={imgInstall} style={styles.servList_img} />
      </View>
      <View style={styles.servList_textpart}>
        <Text variant="titleMedium" style={styles.servList_texthead} numberOfLines={1} >{name} </Text>
        <Text variant="titleSmall" style={styles.servList_textbody}>Price </Text>
        <Text variant="bodySmall" style={styles.servList_textbody}>{price}</Text>

      </View>

    </View>
    </TouchableOpacity>
   
    


  )
}

export default Servica

const styles = StyleSheet.create({
  servList_parent: {
    width: screenWidth,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    height: 100,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius:10,
    padding:10,
  },
  servList_imgpart: {
    width: '30%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius:10,
    overflow:'hidden',
  },
  servList_textpart: {
    width: '70%',
    height: '100%',
    paddingHorizontal: 10,
  },
  servList_img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius:10,
  },
  servList_texthead:{
    fontWeight:'900',
    textTransform:'uppercase',
    marginBottom:4,
    color:'#000',
  },
  servList_textbody:{
    marginBottom:3,
    color:'#000',
    fontSize:15
  },

})