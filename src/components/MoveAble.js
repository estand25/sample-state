import React from 'react';
import {
  View,
  Text,
  PanResponder,
  Animated,
  Easing,
} from 'react-native';
import styles from '../Styles';

class MoveAble extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan : new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder : () => true,
      onPanResponderMove : Animated.event([null,{
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if(this.isDropZone(gesture)){
          this.setState({
            showDraggable : false
          });
        }else{
          Animated.spring(
            this.state.pan,
            {toValue:{x:0,y:0}}
          ).start();
        }
      }
    });
  }

  isDropZone(gesture){
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event){
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <View
          onLayout={this.setDropZoneValues.bind(this)}
          style={styles.dropZone}>
        </View>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable(){
    if(this.state.showDraggable){
      return(
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.circle]}>
            <Text style={styles.text}>Move me!</Text>
          </Animated.View>
        </View>
      );
    }
  }
}

export default MoveAble;
