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
    const maxDate = Date('2065-12-01T03:24:00');

    return (
      <View>
        <Calendar
          current={date}
          minDate={date}
          maxDate={maxDate}
          onDayPress={(day) => {console.log('Selected day', day)}}
          onDayLongPress={(day) => {console.log('selected long day', day)}}
        />
      </View>
    )
  }
}

export default CalendarAble;
