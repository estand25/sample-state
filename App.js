import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Menu from './src/Menu';
import Page from './src/pages/Page';

const RootStack = createStackNavigator({
  Menu: Menu,
  Page: Page,
},{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0077b3'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
