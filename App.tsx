/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import AppRoute from './src/route/AppRoute';

const App = () => {
  return (
    <RootSiblingParent>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        showHideTransition={'slide'}
      />
      <AppRoute />
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({});

export default App;
