import React from 'react';
import { StyleSheet, View, Text, DatePickerIOS, Platform } from 'react-native';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }
	render () {
		return Platform.OS === 'ios' ?

		<DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
          mode='time'
        />
		: <View></View>
	}
}