import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import Demo from '../Demo';
import url from '../common';

const RequestForm = ({ route, navigation }) => {
  const { servicename, price } = route.params;

  const value = Demo();
  const host = url.nodeUrl;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');

  const [errField, setErrField] = useState({
    nameErr: '',
    mobileErr: '',
    addressErr: '',
    cityErr: '',
    stateErr: '',
    pincodeErr: ''

  })

  const validForm = () => {
    setErrField({
      nameErr: '',
      mobileErr: '',
      addressErr: '',
      cityErr: '',
      stateErr: '',
      pincodeErr: ''
    })
    let formIsValid = true;

    if (name == '') {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, nameErr: 'Please Enter Name'
      }))
    }


    if (mobile == '') {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, mobileErr: 'Please Enter  Mobile no'
      }))
    }
    if (mobile != '' && mobile.length != 10) {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, mobileErr: 'Please Enter 10 Digit Mobile no'
      }))
    }

    if (address == '') {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, addressErr: 'Please Enter Address'
      }))
    }
    if (state == '') {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, stateErr: 'Please Enter State'
      }))
    }
    if (city == '') {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, cityErr: 'Please Enter City'
      }))
    }
    if (pincode == '') {
      formIsValid = false;
      setErrField(prevState => ({
        ...prevState, pincodeErr: 'Please Enter Pincode'
      }))
    }
    return formIsValid;
  }


  const handleNameChange = (text) => {
    setName(text);
  };

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleStateChange = (text) => {
    setState(text);
  };

  const handlePincodeChange = (text) => {
    setPincode(text);
  };

  const handleSubmit = () => {
    const _id = value._j._id;
    console.log(name, mobile, address, city, state, pincode, servicename, price);
    if (validForm()) {

      fetch(host + `/users/update/${_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          mobile:mobile,
          address: address,
          city: city,
          state: state,
          pincode: pincode,
          servicename: servicename,
          price:price
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            alert("Your service successfully registered");
            navigation.goBack();
          }
          else {
            alert("Please try again! something went wrong");
          }
        }
        )
        .catch(error => console.error(error));
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backbg}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='arrowleft' size={26} color='black' />
          </TouchableOpacity>

          <Text style={styles.backbtn}>Back</Text>
        </View>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleNameChange}
          placeholder="Enter your name"
          placeholderTextColor="black"
        />
        {errField.nameErr.length > 0 && <Text style={styles.validline}>{errField.nameErr} </Text>}

        <Text style={styles.label}>Mobile No:</Text>
        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter your mobile no"
          placeholderTextColor="black"
          keyboardType='number-pad'
        />
        {errField.mobileErr.length > 0 && <Text style={styles.validline}>{errField.mobileErr}</Text>}

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={handleAddressChange}
          placeholder="Enter your address"
          placeholderTextColor="black"
        />
         {errField.addressErr.length > 0 && <Text style={styles.validline}>{errField.addressErr}</Text>}


        <Text style={styles.label}>City:</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={handleCityChange}
          placeholder="Enter your city"
          placeholderTextColor="black"
        />
        {errField.cityErr.length > 0 && <Text style={styles.validline}>{errField.cityErr}</Text>}

        <Text style={styles.label}>State:</Text>
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={handleStateChange}
          placeholder="Enter your state"
          placeholderTextColor="black"
        />
         {errField.stateErr.length > 0 && <Text style={styles.validline}>{errField.stateErr}</Text>}

        <Text style={styles.label}>Pincode:</Text>
        <TextInput
          style={styles.input}
          value={pincode}
          onChangeText={handlePincodeChange}
          placeholder="Enter your pincode"
          placeholderTextColor="black"
          keyboardType='number-pad'
        />
        {errField.pincodeErr.length > 0 && <Text style={styles.validline}>{errField.pincodeErr}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'black'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backbg: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '5%',
    backgroundColor: '#D9D9D9',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
  },
  backbtn: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto',
    marginLeft: 10,
    color: 'black'
  },
  validline: {
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: '2%',
    marginTop: -15

  },

});

export default RequestForm

