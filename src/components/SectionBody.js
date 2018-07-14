import React from 'react';
import SizeAble from './SizeAble';
import RotationAble from './RotationAble';
import MoveAble from './MoveAble';
import CameraAble from './CameraAble';
import CalendarAble from './CalendarAble';

SectionBody = (props) => {
  const { pageBody } = props;

  if(pageBody == 'SizeAble') {
    var Main = SizeAble;
  } else if(pageBody == 'RotationAble') {
    var Main = RotationAble;
  } else if(pageBody == 'MoveAble') {
    var Main = MoveAble;
  } else if(pageBody == 'CameraAble'){
    var Main = CameraAble;
  } else if(pageBody == 'CalendarAble'){
    var Main = CalendarAble;
  }

  return (
    <Main />
  );
};

export default SectionBody;
