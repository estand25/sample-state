import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda
} from 'react-native-calendars';

class CalendarAble extends React.Component{
  render(){
    const date = Date();
    const minDate = new Date('2018-07-01');
    const maxDate = new Date('2018-12-01');

    return (
      <View>
        <Calendar
          // current={date}
          minDate={minDate}
          maxDate={maxDate}
          onDayPress={(day) => {console.log('Selected day', day)}}
          onDayLongPress={(day) => {console.log('selected long day', day)}}
        />
      </View>
    )
  }
}

export default CalendarAble;
