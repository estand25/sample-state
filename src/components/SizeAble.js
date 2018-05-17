import React from 'react';
import { Text, View, Button } from 'react-native';

class SizeAble extends React.Component {
  state = {
    edgeLength: 10,
  }

  grow = () => this.setState({ edgeLength: this.state.edgeLength * 2 });
  shrink = () => this.setState({ edgeLength: this.state.edgeLength / 2 });

  render(){
    const { edgeLength } = this.state;

    return (
      <View style={{ flex: 1 }}>
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