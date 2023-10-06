import  React  from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { home } from '../screens/home';
import { agenda } from '../screens/agenda';
import { rotina } from '../screens/rotina';

import { NativeScreenNavigationContainer } from 'react-native-screens';

const { Navigator, Screen } = createBottomTabNavigator();



export function AppRoutes(){
    return (

       <NavigationContainer>

        <Navigator>

            <Screen name="Doctor Day" component={home} />  
            <Screen name="Agendamento" component={agenda} />   
            <Screen name="Rotina da consulta" component={rotina} />  

        </Navigator>

       </NavigationContainer>
    )
}