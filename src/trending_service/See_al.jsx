import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from 'react-native'
import React from 'react'
import ListServ from '../service_category/comp/ListServ';

const See_al = ({navigation}) => {
  return (
    <>
     <View style={styles.box}>
    <Text style={styles.text}>Trending Services </Text>
  </View>

  <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ 
        marginBottom: 90 ,
        
      }}
    >
    <TouchableOpacity onPress={() => navigation.navigate('Software')}>
    <ListServ name='Prints Delivery on anywhere' />
    </TouchableOpacity>

   

    </ScrollView>
    </>
  )
}

export default See_al

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