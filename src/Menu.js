import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-flat-button';
import styles from './Styles';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const { containerStyle, subMenuContainerStyle, buttonMenuStyle } = styles;

    return (
      <View
        style={containerStyle}>
        <View
          style={subMenuContainerStyle}>
          <Button
            containerStyle={buttonMenuStyle}
            type="primary"
            onPress={() => this.props.navigation.navigate('Page',{
              paramTitle: "Growing and Shrinking",
              paramObject: "SizeAble"
            })}
            >
              Growing and Shrinking
          </Button>
          <Button
              containerStyle={buttonMenuStyle}
              type="primary"
              onPress={() => this.props.navigation.navigate('Page',{
                paramTitle: "Going Around",
                paramObject: "RotationAble"
              })}
              >
                Going Around
          </Button>
          <Button
              containerStyle={buttonMenuStyle}
              type="primary"
              onPress={() => this.props.navigation.navigate('Page',{
                paramTitle: "Move Around",
                paramObject: "MoveAble"
              })}
              >
                Move Around
          </Button>
          <Button
              containerStyle={buttonMenuStyle}
              type="primary"
              onPress={() => this.props.navigation.navigate('Page',{
                paramTitle: "Use Camera",
                paramObject: "CameraAble"
              })}
              >
                Use Camera
          </Button>
        </View>
      </View>
    );
  }
}

export default Menu;
