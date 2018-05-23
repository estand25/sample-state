import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-flat-button';

import Blink from '../components/Blink';
import SectionBody from '../components/SectionBody';
import styles from '../Styles';

class Page extends React.Component {

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('paramTitle', 'No title passed');
    const object = navigation.getParam('paramObject', 'No object title passed');

    return (
      <View style={{ flex: 1}}>
        <View style={styles.blinkViewStyle}>
          <Blink text={title} />
        </View>
        <SectionBody pageBody={object} />
      </View>
    );
  }
}

export default Page;
