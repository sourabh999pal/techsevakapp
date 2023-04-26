import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/'



const Services = ({ name, color }) => {


  return (

   
      <View style={{
        width: 123,
        height: 123,
        backgroundColor: color,
        borderRadius: 16,
        margin: 5,
      }}>
        <Text style={styles.box_text}>{name}</Text>
      </View>
    


  )
}

export default Services

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,

    borderRadius: 16,
    margin: 15,
  },
  box_text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    margin: 15
  },

})