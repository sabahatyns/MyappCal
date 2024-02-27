import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/splash';
import Calculator from './screens/calculator';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { getToken, notificationListenr,requestUserPermission } from './src/utils/pushnotification';


const Stack = createNativeStackNavigator();

export default function Mycal() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


//notifications
useEffect(() => {
  requestUserPermission() ;
  notificationListenr() ;
  getToken() ;
}, []);
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>

        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen
          name="Menu"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )}


import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Location from './screens/Loc';
import Icon from './screens/icon';
import Contact from './screens/contact';
import ContactList from './screens/cooo';
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator >

      <Drawer.Screen name="Calculator" component={Calculator} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="Change App Icon" component={Icon} />
      <Drawer.Screen name="Contacts" component={Contact} />
      <Drawer.Screen name="Con" component={ContactList} />
    </Drawer.Navigator>
  );
}