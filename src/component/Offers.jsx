import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const Offers = ({name, price,path}) => {
  return (
    
     
    <View style={styles.box}>
      <Image source={path} style={{ width:null,height:110,borderTopRightRadius:20,borderTopLeftRadius:20}} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>{price}</Text>
    </View>

    
  )
}

export default Offers

const styles = StyleSheet.create({
  
    blue:{
      backgroundColor:'#1c3857',
      height:320,
      width:420,
      borderTopLeftRadius:40
    },
    box:{
      backgroundColor:'white',
      width:200,
      height:160,
      marginHorizontal:30,
      borderRadius:20
    },
    name:{
      fontSize:24,
      color:'#1c3857',
      fontWeight:'bold',
      alignSelf:'center'
    },
    price:{
      fontSize:16,
      alignSelf:'center',
      color:'#FEA700',
      marginTop:-4,
    }
})