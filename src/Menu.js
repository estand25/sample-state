import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-flat-button';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const btnTitle = "Growing and Shrinking";
    const { containerStyle, subContainerStyle, buttonStyle } = styles;
    return (
      <View
        style={containerStyle}>
        <View
          style={subContainerStyle}>
          <Button
            containerStyle={buttonStyle}
            type="primary"
            onPress={() => this.props.navigation.navigate('Page',{
              paramTitle: "Growing and Shrinking",
              paramObject: "SizeAble"
            })}
            >
              Growing and Shrinking
          </Button>
          <Button
              containerStyle={buttonStyle}
              type="primary"
              onPress={() => this.props.navigation.navigate('Page',{
                paramTitle: "Going Around",
                paramObject: "RotationAble"
              })}
              >
                Going Around
          </Button>
          <Button
              containerStyle={buttonStyle}
              type="primary"
              onPress={() => this.props.navigation.navigate('Page',{
                paramTitle: "Move Around",
                paramObject: "MoveAble"
              })}
              >
                Move Around
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181c36',
  },
  subContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0077b3',
    padding: 20
  },
  buttonStyle: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
}

export default Menu;
