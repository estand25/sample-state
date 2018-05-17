import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Blink from './src/components/Blink';
import SizeAble from './src/components/SizeAble';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink text='I love to blink' />
        <SizeAble />
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
