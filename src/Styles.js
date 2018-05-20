import { StyleSheet, Dimensions } from 'react-native';

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181c36',
  },
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
    padding: 7
  },
  subMenuContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0077b3',
    padding: 10
  },
  buttonStyle: {
    width: 200,
    height: 30,
    marginVertical: 5
  },
  buttonMenuStyle: {
    width: 200,
    height: 50,
    marginVertical: 10
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff'
  },
  blinkStyle: {
    borderStyle: 'solid',
    paddingTop: 20,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  mainContainer: {
    flex: 1
  },
  dropZone: {
    height: 100,
    backgroundColor: '#0077b3'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff'
  },
  draggableContainer: {
    position: 'absolute',
    top: Window.height/2 - CIRCLE_RADIUS,
    left: Window.width/2 - CIRCLE_RADIUS,
  },
  circle: {
    backgroundColor: '#0077b3',
    width: CIRCLE_RADIUS*2,
    height: CIRCLE_RADIUS*2,
    borderRadius: CIRCLE_RADIUS
  },
  blinkStyle: {
    borderStyle: 'solid',
    paddingTop: 20,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
