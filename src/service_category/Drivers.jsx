import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Drivers = ({navigation}) => {
  return (
    <>
      <View style={styles.textvox}>
        <Text style={styles.textbok}>Software related Services</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Printers Driver Installation' price='500' navigation={navigation} />
        <Servica name='Mouse/keyboard' price='500' navigation={navigation} />
        <Servica name='Wifi adapter' price='500' navigation={navigation} />

      </ScrollView>
    </>
  )
}

export default Drivers

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