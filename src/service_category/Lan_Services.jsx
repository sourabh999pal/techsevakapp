import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';


const Lan_Services = ({navigation}) => {
  return (
    <>
       <View style={styles.textvox}>
        <Text style={styles.textbok}>Software related Services</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Wifi setup' price='500' navigation={navigation} />
        <Servica name='Simple wifi router installation' price='500' navigation={navigation} />
        <Servica name='Printer setup on LAN' price='500' navigation={navigation} />
        <Servica name='Wifi Network Setup' price='500' navigation={navigation} />
        <Servica name='Ip Address Config' price='500' navigation={navigation} />
        <Servica name='Data Transfer Lan' price='500' navigation={navigation} />
        <Servica name='Share drives on Networks' price='500' navigation={navigation} />
        <Servica name='Troubleshooting of home/office wifi networks' price='500' navigation={navigation} />
      </ScrollView>
    </>
  )
}

export default Lan_Services

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