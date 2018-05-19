import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-flat-button';
import Blink from '../components/Blink';
import RotationAble from '../components/RotationAble';

class Page2 extends React.Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('paramTitle','No title passed');
    
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.blinkStyle}>
          <Blink text={title} />
        </View>
        <RotationAble />
      </View>
    );
  }
}

const styles = {
  blinkStyle: {
    borderStyle: 'solid',
    paddingTop: 20,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
}

export default Page2;
