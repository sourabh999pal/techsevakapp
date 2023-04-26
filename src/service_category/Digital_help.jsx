import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Digital_help = ({ navigation }) => {
  return (
    <>
      <View style={styles.textvox}>
        <Text style={styles.textbok}>Software related Services</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Consultation on Latest Technology' price='500' navigation={navigation} />
        <Servica name='Online Meeting' price='500' navigation={navigation} />
        <Servica name='Remote connection' price='500' navigation={navigation} />
        <Servica name='Word' price='500' navigation={navigation} />
        <Servica name='Excel' price='500' navigation={navigation} />
        <Servica name='Powerpoint' price='500' navigation={navigation} />
        <Servica name='PC not stating ' price='500' navigation={navigation} />



      </ScrollView>
    </>
  )
}

export default Digital_help

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