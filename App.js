import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/splash';
import Calculator from './screens/calculator';

const Stack = createNativeStackNavigator();

export default function App() {
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
  )
}

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