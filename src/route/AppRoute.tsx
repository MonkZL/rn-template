import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenKeys from './ScreenKeys';
import IndexTabsRoute from './IndexTabsRoute';
import {initNavigation} from '../../core/navigationTools';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  const navigationRef = initNavigation();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ScreenKeys.IndexTabsRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={ScreenKeys.IndexTabsRoute}
          component={IndexTabsRoute}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
