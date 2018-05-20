import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from 'react-native-flat-button';

import { changeToObj } from '../actions';
import Blink from '../components/Blink';
import SizeAble from '../components/SizeAble';
import RotationAble from '../components/RotationAble';
import MoveAble from '../components/MoveAble';
import styles from '../Styles';

class Page extends React.Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('paramTitle', 'No title passed');
    const object = navigation.getParam('paramObject', 'No object title passed');

    if(object == 'SizeAble') {
      var Main = SizeAble;
    } else if(object == 'RotationAble') {
      var Main = RotationAble;
    } else if(object == 'MoveAble') {
      var Main = MoveAble;
    }
    return (
      <View style={{ flex: 1}}>
        <View style={styles.blinkViewStyle}>
          <Blink text={title} />
        </View>
        <Main />
      </View>
    );
  }
}

const mapStateToProps = ({ demoApp }) => {
  const { goTo } = demoApp;
  return { goTo };
}

export default connect(mapStateToProps, null)(Page);
