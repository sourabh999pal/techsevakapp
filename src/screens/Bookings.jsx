import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import Demo from '../Demo';
import url from '../common';
import Icon from 'react-native-vector-icons/AntDesign';


import Icon2 from 'react-native-vector-icons/MaterialIcons';

const image = require('../../android/app/src/main/assets/logoback.png');

import RazorpayCheckout from 'react-native-razorpay';

var screenSize = Dimensions.get('window');
var screenWidth = screenSize.width;
var screenHeight = screenSize.height;


const Bookings = () => {
  const value = Demo();
  const host = url.nodeUrl;
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [serviceData, setServiceData] = useState(null);

  const [id, setId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      newServReq();
    }, 1000)

  }, [])

  // new service request function start
  const newServReq = async () => {
    const _id = value._j._id;


    fetch(host + `/users/userServiceList/${_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.result);
          setServiceData(res.result);
          setLoading(false)
        }
        else {
          alert("somthing went wrong")
        }
      }
      )
      .catch(error => console.error(error));

  }






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
  const checkoutHandler = async (item) => {
    const amount = item.payment;
    const payment_id = item._id;

  console.log(payment_id);

    let keyid = await getKeyHandler();

    let order = await checkoutdata(amount);

   

    const options = {
      description: 'service payment by user',
      image: image,
      currency: 'INR',
      key: keyid,
      amount: order.amount,
      name: 'TechSevak payment Portal',
      order_id: order.id,
      // callback_url: host + '/users/paymentverfication',
      // redirect:true,
      // prefill: {
      //   email: 'void@razorpay.com',
      //   contact: '9191919191',
      //   name: 'Razorpay Software'
      // },
      theme: { color: '#F37254' },
      method: {
        netbanking: true,
        card: true,
        wallet: false,
        upi: true,
      },

    }





    RazorpayCheckout.open(options).then((data) => {
      // handle success

      success(data, payment_id);
    }).catch((error) => {
      // handle failure
      alert(`Here is some Error kindly try again the payment`);
    });


  

  }

  const success = async (data, payment_id) => {
    let result = null;
    const _id = value._j._id;

    await fetch(host + `/users/paymentverfication/${payment_id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data
      })
    }).then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          result = res.result;
          navigation.navigate('Thankyou', { id: data.razorpay_payment_id, thankyoutext: 'Thankyou for Complete the payment ', productname: 'Payment Request ', estimatetime: '1 to 2 days' })
        }
        else if (res.status === 400) {
          alert("Your payment is not real please do again")
        }
      }
      );

  }

  return (
    <>
      <View style={styles.textvox}>
        <Text style={styles.textbok}>My Bookings</Text>


      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, height: 1.5, backgroundColor: 'black' }} />
      </View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => setShow(false)}>
          <View style={show ? styles.nonactive : styles.active}>
            <Text style={styles.button}>Ongoing</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={show ? styles.active1 : styles.nonactive}>
            <Text style={styles.button1}>History</Text>
          </View>
        </TouchableOpacity>

      </View>


      <View style={show ? styles.hide : styles.ongoing}>


        {
          loading ? <ActivityIndicator size="large" color="#E71615" style={{ marginTop: '50%' }} /> :

            (serviceData.length == 0) ? <Text style={styles.servDataheadText}>Sorry You don't Create any Service request untill Now !</Text> :

              serviceData && serviceData.map((item, index) => {

                return (
                  <View key={index} id={item._id} style={{}}>
                    <View>
                      <TouchableOpacity onPress={() => id == null ? setId(index) : setId(null)}>
                        <View style={[styles.servDataParDiv, { borderBottomWidth: id == index ? 0 : 1 }]}>
                          <Text style={styles.servDataheadText}>{index + 1}.{item.servicename} </Text>
                          <Icon2 name="keyboard-arrow-right" size={30} color="#000" style={{ transform: [{ rotate: id == index ? '90deg' : '0deg' }], position: 'absolute', right: 10, top: 10 }} />
                        </View>
                      </TouchableOpacity>

                    </View>
                    {
                      id == index &&
                      <View style={styles.servDataopenDiv}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>Name </Text>
                          <Text style={styles.datastyle}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>Mobile </Text>
                          <Text style={styles.datastyle}>{item.mobile}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>Address </Text>
                          <Text style={styles.datastyle}>{item.address}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>City </Text>
                          <Text style={styles.datastyle}>{item.city}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>State</Text>
                          <Text style={styles.datastyle}>{item.state}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>Pincode</Text>
                          <Text style={styles.datastyle}>{item.pincode}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.datastyle}>Total Pay</Text>
                          <Text style={styles.datastyle}>{item.payment}</Text>
                        </View>

                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: '5%', marginTop: '2%' }} />



                        {
                          item.status == 'payment completed' ?
                            <TouchableOpacity style={{ backgroundColor: 'red', width: 150, borderRadius: 10, alignSelf: 'center', marginTop: 8 }} onPress={Reciept}>
                              <Text style={{ textAlign: 'center', fontSize: 18, padding: 8, color: 'white' }}>Invoice</Text>
                            </TouchableOpacity>
                            :
                            <>
                              <Text style={styles.disclaimer}>
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                              </Text>
                              <TouchableOpacity onPress={() => checkoutHandler(item)} >
                                <View style={styles.inputbutton}>
                                  <Text style={styles.inputbuttontext}>PAY NOW</Text>
                                </View>
                              </TouchableOpacity>
                            </>

                        }

                      </View>
                    }
                  </View>
                )
              })
        }
      </View>


      <View style={show ? styles.ongoing : styles.hide}>
        <Text style={{ color: 'black' }}> History text details</Text>
      </View>
    </>
  )
}

const book = () => {
  return (
    <View>
      <Text>this is Ongoing component</Text>
    </View>
  )
}

export default Bookings

const styles = StyleSheet.create({
  textbok: {
    color: '#1c3857',
    fontSize: 24,
    fontWeight: '800'
  },
  textvox: {
    alignSelf: 'center',
    padding: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    padding: 5,

  },
  button1: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    padding: 5,

    alignSelf: 'center'
  },
  active: {
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10,
    width: 180,
    alignItems: 'center',
  },
  active1: {
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10,
    width: 160,
    alignItems: 'center',
    marginLeft: 3
  },
  main: {
    flexDirection: 'row',
    marginTop: 20,
    width: null,
    height: 35,
    backgroundColor: '#d1d2d7',
    borderRadius: 10,
    marginHorizontal: 16,
  },
  nonactive: {

    margin: 2,
    borderRadius: 10,
    width: 160,
    alignItems: 'center',
  },
  hide: {
    display: 'none'
  },
  ongoing: {
    marginTop: 20



  },


  backbtn: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto',
    marginLeft: 10,
    color: 'black'
  },
  backbg: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    height: '10%',
    backgroundColor: '#D9D9D9',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  quick: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
  },
  paymentCard: {
    marginVertical: '1.5%'
  },
  servDataParDiv: {

    borderBottomColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 15,
    flexDirection: 'row',

    marginHorizontal: 10,


  },
  servDataheadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 10,
    paddingBottom: 3,
  },
  servDataBodyText: {
    fontSize: 15,
    color: 'rgba(0,0,0,0.6)',
    width: '88%',
    overflow: 'hidden',
    marginLeft: 8
  },
  servDataIconPart: {



  },
  servDataopenDiv: {
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  datastyle: {
    fontSize: 15,
    color: '#150580',
    fontWeight: '600'

  },
  inputbutton: {
    fontWeight: '400',
    alignItems: 'center',
    marginVertical: '2%',
    height: 52,
    borderRadius: 5,
    backgroundColor: 'red',
    paddingVertical: '4%',

  },
  inputbuttontext: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900'

  },
  disclaimer: {
    fontSize: 11,
    alignSelf: 'center',
    marginHorizontal: '4%',
    marginTop: '9%',
    color: 'black',
    fontWeight: '500'
  },
})