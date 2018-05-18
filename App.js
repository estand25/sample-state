import React from 'react';
import { Text, View } from 'react-native';
import Page1 from './src/pages/Page1';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1 }}>
        <Page1 />
      </View>
    );
  }
}
