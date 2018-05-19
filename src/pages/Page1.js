import React from 'react';
import { View } from 'react-native';
import Blink from '../components/Blink';
import SizeAble from '../components/SizeAble';

class Page1 extends React.Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('paramTitle','No title passed');
    
    return (
      <View style={{ flex: 1}}>
        <View style={styles.blinkStyle}>
          <Blink text={title}/>
        </View>
        <SizeAble />
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

export default Page1;
