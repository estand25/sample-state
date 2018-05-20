import MoveAble from '../components/MoveAble';
import RotationAble from '../components/RotationAble';
import SizeAble from '../components/SizeAble';
import { MOVE_ABLE, ROTATION_ABLE, SIZE_ABLE } from './types';

export const changeToObj = (text) => ({
  type: MOVE_ABLE,
  payload: text == 'MoveAble' ? MoveAble : text == 'RotationAble' ? RotationAble : SizeAble
});
