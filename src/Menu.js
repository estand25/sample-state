import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-flat-button';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const btnTitle = "Growing and Shrinking";
    const { containerStyle, buttonStyle } = styles;
    return (
      <View
        style={containerStyle}>
        <Button
          containerStyle={buttonStyle}
          type="primary"
          onPress={() => this.props.navigation.navigate('Page1',{
            paramTitle: "Growing and Shrinking"
          })}
          >
            Growing and Shrinking
          </Button>
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
  buttonStyle: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
}

export default Menu;
