import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Blink from './src/components/Blink';
import SizeAble from './src/components/SizeAble';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1 }}>
        <Blink style={{flex: 1, paddingTop: 55}} text='I love to blink' />
        <SizeAble style={{flex: 2}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
