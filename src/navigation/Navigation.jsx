import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from '../Signup/Register';
import Login from '../Signup/Login';
import ForgotPassword from '../Signup/ForgotPassword';
import Onboarding from '../Signup/Onboarding';
import Tabnavigation from './Tabnavigation';


const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator
    initialRouteName='Onboarding'
    screenOptions={{
        headerShown:false,
    }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Tab" component={Tabnavigation} />
    </Stack.Navigator>
  )
}

export default Navigation
