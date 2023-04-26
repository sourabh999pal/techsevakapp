import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListServ = ({name}) => {
  return (
    <View style={{
      width:null,
      height:100,
      backgroundColor:'pink',
      borderRadius:20,
      marginHorizontal:15,
      marginVertical:8
    }}>
      <Text style={{
        fontSize:23,
        alignSelf:'center',
        fontWeight:'600',
        padding:30,

      }}>{name}</Text>
    </View>
  )
}

export default ListServ

const styles = StyleSheet.create({})