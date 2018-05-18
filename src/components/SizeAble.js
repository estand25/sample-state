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
  };

  componentWillUpdate(){
    LayoutAnimation.configureNext(animationConfig);
  }

  grow = () => this.setState({ edgeLength: this.state.edgeLength * 2 });
  shrink = () => this.setState({ edgeLength: this.state.edgeLength / 2 });
  direction = () => this.setState({ direction: this.state.direction == 'column' ? 'row' : 'column'})

  render(){
    const { edgeLength, direction } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <View style={styles.container}>
          <Button onPress={this.grow} title='Enlarge' />
          <Button onPress={this.shrink} title='Shrink' />
          <Button onPress={this.direction} title='Switch Direction' />
          <Text>Direction: {direction}</Text>
        </View>
        <View style={{ flex: 2,
                       flexDirection: direction,
                       alignItems: 'center',
                       flexWrap: 'wrap' }}>
          <View style={{height: edgeLength,
                        width: edgeLength,
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
