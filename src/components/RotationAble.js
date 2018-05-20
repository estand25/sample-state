import React from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  Easing }
from 'react-native';
import Button from 'react-native-flat-button';
import styles from '../Styles';

class RotationAble extends React.Component {
  state = {
    direction: true,
  }
  constructor () {
      super()
      this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  forward = () => this.setState({ direction: true });
  backward = () => this.setState({ direction: false });

  render() {
    const { direction } = this.state;
    const leftDeg = !direction ? '360deg' : '0deg';
    const rightDeg = direction ? '360deg' : '0deg';

    const spin = this.spinValue.interpolate({
      inputRange: [ 0, 1],
      outputRange: [ leftDeg, rightDeg ]
    })
    return (
      <View style={styles.containerStyle}>
        <View style={styles.subContainerStyle}>
          <Button
            containerStyle={styles.buttonStyle}
            onPress={this.forward}
            type="positive">
            Forward
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            onPress={this.backward}
            type="negative">
            Reveser
          </Button>
        </View>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
        />
      </View>
    )
  }
}

export default RotationAble;
