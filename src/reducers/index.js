import { combineReducers } from 'redux';
import demoReduxer from './demoReduxer';

export default combineReducers({
  demoApp: demoReduxer
})
