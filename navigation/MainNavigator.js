import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CvScreen from '../screens/CvScreen';

const MainStackNavigator = createStackNavigator();

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}></MainStackNavigator.Screen>
        <MainStackNavigator.Screen
          name="Cv"
          component={CvScreen}
          options={{
            headerShown: false,
          }}></MainStackNavigator.Screen>
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
