import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Menu from './src/Menu';
import Page1 from './src/pages/Page1';
import Page2 from './src/pages/Page2';
import Page3 from './src/pages/Page3';

const RootStack = createStackNavigator({
  Menu: Menu,
  Page1: Page1,
  Page2: Page2,
  Page3: Page3,
},{
  initialRouteName: 'Menu',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
