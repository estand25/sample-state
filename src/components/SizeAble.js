import React from 'react';
import {
  Text,
  View,
  Button,
  LayoutAnimation
} from 'react-native';

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
    maxLength: 410,
    minLength: 10,
    mSide: 410
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
    this.setState({ mSide: direction == 'column' ? 430 : 410 })
  }

  render(){
    const { mSide, edgeLength, direction } = this.state;
    const height = direction == 'row' ? edgeLength : mSide;
    const width = direction == 'column' ? edgeLength : mSide;

    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <View style={styles.container}>
          <Button onPress={this.grow} title='Enlarge' />
          <Button onPress={this.shrink} title='Shrink' />
          <Button onPress={this.direction} title='Switch Direction' />
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
  }
}

export default SizeAble;
// https://blog.callstack.io/react-native-animations-revisited-part-i-783143d4884
