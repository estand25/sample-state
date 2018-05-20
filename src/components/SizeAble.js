import React from 'react';
import {
  Text,
  View,
  LayoutAnimation
} from 'react-native';
import Button from 'react-native-flat-button';
import styles from '../Styles';

const springAnimationProperties = {
  type: 'spring',
  springDamping: 0.4,
  property: 'opacity',
}

const animationConfig = {
  duration: 700,
  create: springAnimationProperties,
  update: springAnimationProperties,
  delete: springAnimationProperties,
};

class SizeAble extends React.Component {
  state = {
    edgeLength: 10,
    direction: 'row',
    maxLength: 400,
    minLength: 10,
    mSide: 430
  };

  componentWillUpdate(){
    LayoutAnimation.configureNext(animationConfig);
  }

  grow = () => {
    const { edgeLength, maxLength } = this.state;
    this.setState({ edgeLength: edgeLength + 10 >= maxLength ? maxLength : edgeLength + 10 });
  }
  shrink = () => {
    const { edgeLength, minLength } = this.state;
    this.setState({ edgeLength: this.state.edgeLength - 10 <= minLength ? minLength : edgeLength - 10 });
  }
  direction = () => {
    const { direction, mSide, maxLength } = this.state;
    this.setState({ direction: direction == 'column' ? 'row' : 'column' })
    this.setState({ mSide: direction == 'column' ? 430 : 410 })
    this.setState({ maxLength: direction == 'column' ? 400 : 380})
  }

  render(){
    const { mSide, edgeLength, direction } = this.state;
    const height = direction == 'row' ? edgeLength : mSide;
    const width = direction == 'column' ? edgeLength : mSide;

    return (
      <View style={styles.containerStyle}>
        <View style={styles.subContainerStyle}>
          <Button
            containerStyle={styles.buttonStyle}
            onPress={this.grow}
            type="positive"
            >
            Grow
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            onPress={this.shrink}
            type="negative"
            >
            Shrink
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            onPress={this.direction}
            type="neutral"
            >
            Switch Direction
          </Button>
          <Text style={styles.textStyle}>Direction: {direction}</Text>
          <Text style={styles.textStyle}>Length: {edgeLength} </Text>
        </View>
        <View style={{ flex: 2,
                       flexDirection: direction,
                       alignItems: 'center',
                       flexWrap: 'wrap',
                       backgroundColor: '#181c36' }}>
          <View style={{height: height,
                        width: width,
                        backgroundColor: 'blue'}}/>
        </View>
      </View>
    );
  }
}

export default SizeAble;
// https://blog.callstack.io/react-native-animations-revisited-part-i-783143d4884
