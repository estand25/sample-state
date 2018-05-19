import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Page1 from './src/pages/Page1';
import Menu from './src/Menu';

const RootStack = createStackNavigator({
  Menu: Menu,
  Page1: Page1,
},{
  initialRouteName: 'Menu',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
