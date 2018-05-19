import React from 'react';
import {
  Text,
  View,
  LayoutAnimation
} from 'react-native';
import Button from 'react-native-flat-button';

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
    maxLength: 420,
    minLength: 10,
    mSide: 500
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
    const { direction, mSide } = this.state;
    this.setState({ direction: direction == 'column' ? 'row' : 'column' })
    this.setState({ mSide: direction == 'column' ? 410 : 430 })
  }

  render(){
    const { mSide, edgeLength, direction } = this.state;
    const height = direction == 'row' ? edgeLength : mSide;
    const width = direction == 'column' ? edgeLength : mSide;

    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <View style={styles.container}>
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
          <Text>Direction: {direction}</Text>
          <Text>Length: {edgeLength} </Text>
        </View>
        <View style={{ flex: 2,
                       flexDirection: direction,
                       alignItems: 'center',
                       flexWrap: 'wrap' }}>
          <View style={{height: height,
                        width: width,
                        backgroundColor: 'blue'}}/>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonStyle: {
    width: 200,
    height: 30,
    marginVertical: 5
  },
}

export default SizeAble;
// https://blog.callstack.io/react-native-animations-revisited-part-i-783143d4884
