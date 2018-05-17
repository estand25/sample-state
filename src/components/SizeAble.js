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
  };

  componentWillUpdate(){
    LayoutAnimation.configureNext(animationConfig);
  }

  grow = () => this.setState({ edgeLength: this.state.edgeLength * 2 });
  shrink = () => this.setState({ edgeLength: this.state.edgeLength / 2 });

  render(){
    const { edgeLength } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <View style={styles.container}>
          <Button onPress={this.grow} title='Enlarge' />
          <Button onPress={this.shrink} title='Shrink' />
        </View>
        <View style={{ flex: 2, height: edgeLength, width: edgeLength, backgroundColor: 'blue'}}/>
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
