import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Infra_shifting = ({navigation}) => {
  return (
    <>
      <View style={styles.textvox}>
        <Text style={styles.textbok}>Software related Services</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Shifting Office LAN Setup' price='500' navigation={navigation}/>
        <Servica name='Shifting of Hardware & Peripheral' price='500' navigation={navigation} />
        <Servica name='Shifting From physical LAN Server to cloud' price='500' navigation={navigation}/>


      </ScrollView>
    </>
  )
}

export default Infra_shifting

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