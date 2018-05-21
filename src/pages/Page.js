import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-flat-button';

import Blink from '../components/Blink';
import SizeAble from '../components/SizeAble';
import RotationAble from '../components/RotationAble';
import MoveAble from '../components/MoveAble';
import CameraAble from '../components/CameraAble';
import styles from '../Styles';

class Page extends React.Component {
  pageBody(object){
    if(object == 'SizeAble') {
      var Main = SizeAble;
    } else if(object == 'RotationAble') {
      var Main = RotationAble;
    } else if(object == 'MoveAble') {
      var Main = MoveAble;
    } else if(object == 'CameraAble'){
      var Main = CameraAble;
    }

    return (
      <Main />
    )
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('paramTitle', 'No title passed');
    const object = navigation.getParam('paramObject', 'No object title passed');

    return (
      <View style={{ flex: 1}}>
        <View style={styles.blinkViewStyle}>
          <Blink text={title} />
        </View>
        {this.pageBody(object)}
      </View>
    );
  }
}

export default Page;
