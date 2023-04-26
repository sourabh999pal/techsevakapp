import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Support = () => {
  return (
    <>
     <View style={styles.textvox}>
      <Text style={styles.textbok}>Support</Text>
    </View>
    <View style={{
      alignSelf:'center',
      margin:20,
      marginTop:50,
    }}>
      <Text style={{
        fontSize:20,
        fontWeight:'500',
        color:'red'
      }}>We have 24 Hours support helpline no. 9999999999</Text>
    </View>
    </>
   

  )
}

export default Support

const styles = StyleSheet.create({
  textbok:{
    color:'#1c3857',
    fontSize:24,
    fontWeight:'800'
  },
  textvox:{
    alignSelf:'center',
    padding:20,
    flexDirection:'row',
    width:'100%',
    backgroundColor:'white',
    justifyContent:'center',
  },
})