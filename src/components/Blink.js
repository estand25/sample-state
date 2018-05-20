import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Styles';

class Blink extends React.Component {
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

    setInterval (()  => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }
  componentWillUnmount() {
    this.setState({isShowingText: false})
  }

  render() {
    let display = this.state.isShowingText ? this.props.text: ' ';

    return (
      <Text
        style={styles.blinkStyle}
      >
        {display}
      </Text>
    )
  }
}

export default Blink;
