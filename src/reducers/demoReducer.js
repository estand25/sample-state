import { MOVE_ABLE, ROTATION_ABLE, SIZE_ABLE } from '../actions/types';
const INITAL_STATE = {
  goTo: ''
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case MOVE_ABLE:
      return { ...state, goTo: action.payload };
    case ROTATION_ABLE:
      return { ...state, goTo: action.payload };
    case SIZE_ABLE:
      return { ...state, goTo: action.payload };
    default:
      return state;
  }
};
