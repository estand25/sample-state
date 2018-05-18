import React from 'react';
import { View } from 'react-native';
import Blink from '../components/Blink';
import SizeAble from '../components/SizeAble';

class Page1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{
          borderStyle: 'solid',
          paddingTop: 20,
          justifyContent:'center',
          alignItems: 'center'
        }}>
          <Blink text='Page 1'/>
        </View>
        <SizeAble />
      </View>
    );
  }
}

export default Page1;
