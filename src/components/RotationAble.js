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
    isPause: false,
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

  forward = () => {
    this.setState({ direction: true });
    this.setState({ isPause: false });
  }
  backward = () => {
    this.setState({ direction: false });
    this.setState({ isPause: false });
  }
  pause = () => {
    const { isPause } = this.state;
    this.setState({ isPause: isPause ? false : true })
  }

  render() {
    const { direction, isPause } = this.state;
    var leftDeg = !direction ? '360deg' : '0deg';
    var rightDeg = direction ? '360deg' : '0deg';
    var pauseText = 'Not Pause';

    if(isPause) {
      pauseText = 'Pause';
      leftDeg = '0deg';
      rightDeg = '0deg';
    }

    const spin = this.spinValue.interpolate({
      inputRange: [ 0, 1],
      outputRange: [ leftDeg, rightDeg ]
    })

    return (
      <View style={styles.containerStyle}>
        <View style={styles.subContainerStyle_RA}>
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
          <Button
            containerStyle={styles.buttonStyle}
            onPress={this.pause}
            type="neutral"
            >
            {pauseText}
          </Button>
        </View>
        <View style={{ flex: 2, padding: 10 }}>  
          <Animated.Image
            style={{
              width: 227,
              height: 200,
              transform: [{rotate: spin}] }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
          />
        </View>
      </View>
    )
  }
}

export default RotationAble;
