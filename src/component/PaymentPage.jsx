import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const image = require('../../android/app/src/main/assets/logoback.png');

import RazorpayCheckout from 'react-native-razorpay';

const PaymentPage = () => {

    const getKeyHandler = async () => {
        let key = null;
        await fetch(host + `/users/getkey`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json())
          .then((res) => {
            if (res.status === 200) {
              key = res.key;
            }
            else if (res.status === 400) {
              console.log('error in getKeyHandler')
            }
          }
          );
    
        return key
      }

      const checkoutdata = async (amount) => {
        let checkdata = null;
        await fetch(host + `/users/checkout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount
          })
        }).then((res) => res.json())
          .then((res) => {
            if (res.status === 200) {
              checkdata = res.result;
            }
            else if (res.status === 400) {
              console.log('error in checkoutHandler')
            }
          }
          );
        return checkdata
      }

    const checkout =() =>{
        console.log('payment function')

        var options = {
            description: 'Credits towards consultation',
            image: image,
            currency: 'INR',
            key: '', // Your api key
            amount: '5000',
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
            console.log(error);
          });
    }

  return (
    <TouchableOpacity onPress={checkout}>
      <Text style={{alignSelf:'center',color:'black',fontSize:22, marginTop:40}}>PaymentPage</Text>
    </TouchableOpacity>
  )
}

export default PaymentPage

const styles = StyleSheet.create({})