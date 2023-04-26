import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Servica from './comp/Servica'

const Smart_home = ({navigation}) => {
  return (
    <>
      <View style={styles.textvox}>
        <Text style={styles.textbok}>Software related Services</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Bluetooth speaker setup' price='500' navigation={navigation} />
        <Servica name='Installation of Voice control Light/fan' price='500' navigation={navigation} />
        <Servica name='Configuration of Smart TV and wifi' price='500' navigation={navigation} />
       
       
      </ScrollView>
    </>
  )
}

export default Smart_home

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
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
})