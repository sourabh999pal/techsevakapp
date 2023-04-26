import React from 'react';

import Icons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Bookings from '../screens/Bookings';
import Profile from '../screens/Profile';
import Support from '../screens/Support';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation';


import Software from '../service_category/Software';
import Hardware from '../service_category/Hardware';
import Desktop_os from '../service_category/Desktop_os';
import Lan_Services from '../service_category/Lan_Services';
import Drivers from '../service_category/Drivers';
import Smart_home from '../service_category/Smart_home';
import Infra_shifting from '../service_category/Infra_shifting';
import Prints_delivery from '../service_category/Prints_delivery';
import Digital_help from '../service_category/Digital_help';
import See_all from '../service_category/See_all';
import See_al from '../trending_service/See_al';
import RequestForm from '../service_category/RequestForm';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackScreen = () => {
    return (
        
         <Tab.Navigator
         initialRouteName='Home'


         screenOptions={{


             headerShown: false,
             tabBarShowLabel: false,

             tabBarStyle: {
                 position: 'absolute',
                 height: 90,
                 borderTopStartRadius: 30,
                 backgroundColor: 'white',


             },
             tabBarInactiveTintColor: '#838687',
             tabBarActiveTintColor: '#f5363f',

         }}


     >
         <Tab.Screen name="Home" component={Home}
             options={{

                 tabBarIcon: ({ focused, color }) => {
                     let iconName;
                     iconName = focused ? 'home' : 'home-outline'
                     return (

                         <Icons name={iconName} color={color} size={26} />
                     )
                 },

             }}

         />
         <Tab.Screen name="Bookings" component={Bookings}
             options={{

                 tabBarIcon: ({ focused, color }) => {
                     let iconName;
                     iconName = focused ? 'document-text' : 'document-text-outline'
                     return (

                         <Icons name={iconName} color={color} size={26} />
                     )
                 },

             }}
         />
         <Tab.Screen name="Profile" component={Profile}
             options={{

                 tabBarIcon: ({ focused, color }) => {
                     let iconName;
                     iconName = focused ? 'person' : 'person-outline'
                     return (

                         <Icons name={iconName} color={color} size={26} />
                     )
                 },

             }}
         />
         {/* <Tab.Screen name="Support" component={Support} 
  options={{
     
     tabBarIcon:({focused, color}) => {
        let iconName;
        iconName = focused ? 'ios-build':'ios-build-outline'
     return(
         
         <Icons name={iconName} color={color} size={26}/>
     )},
    
 }}
 /> */}
     </Tab.Navigator>
    )
}


const Tabnavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName='tab'
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="tab" component={StackScreen} />
        <Stack.Screen name="Software" component={Software} />
        <Stack.Screen name="Hardware" component={Hardware} />
        <Stack.Screen name="Desktop_os" component={Desktop_os} />
        <Stack.Screen name="Lan_services" component={Lan_Services} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Smart_home" component={Smart_home} />
        <Stack.Screen name="Infra_shifting" component={Infra_shifting} />
        <Stack.Screen name="Print_deliver" component={Prints_delivery} />
        <Stack.Screen name="Digital_help" component={Digital_help} />
        <Stack.Screen name="See_all" component={See_all} />
        <Stack.Screen name="See_al" component={See_al} />
        <Stack.Screen name="requestform" component={RequestForm} />
        <Stack.Screen name="navigation" component={Navigation} />
        

    </Stack.Navigator>
    )
}
export default Tabnavigation