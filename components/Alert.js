import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, DatePickerIOS, Platform, TimePickerAndroid } from 'react-native';
import { setLocalNotification } from '../utils/helpers';
import Picker from './Picker';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    	chosenDate: new Date(),
    	isDateTimePickerVisible: false,
    	timeSet: false,
    };
 
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
    this.setState({chosenDate: date, timeSet: true});
    setLocalNotification(date.getHours(), date.getMinutes());
  };

	platformPicker = () => {
	return Platform.OS === 'ios' ? true : false 
	}

  newDate = () => {
  	let hour = parseInt(this.state.chosenDate.getHours());
  	let minutes = parseInt(this.state.chosenDate.getMinutes());
  	let zone = "";

  	// format for minutes
		if (minutes < 10) {
		    minutes = "0" + String(minutes);
		}

		// format for hours
		if (hour > 12) {
				zone = "PM"
		    hour = hour - 12;
		} else {
			zone = "AM"
		}
		if (hour < 10) {
			    hour = "0" + String(hour);
		}

  	return {
  		hour: hour,
  		minutes: minutes,
  		zone: zone,
  	}
  }

  render() {
  	const platformPicker = this.props.platformPicker;
  	let chosenDate = this.state.chosenDate;
    return (
    	<View style={styles.container}>   		
    		<Text style={styles.headline}>Set Time For Daily Motivation Boost</Text>
				<View>
	        <TouchableOpacity 
	        onPress={this._showDateTimePicker}
	        style={styles.button}
	        >
	          <Text>Set Time</Text>
	        </TouchableOpacity>
	        <DateTimePicker
	          isVisible={this.state.isDateTimePickerVisible}
	          onConfirm={this._handleDatePicked}
	          onCancel={this._hideDateTimePicker}
	          mode="time"
	        />
	      </View>
	      {this.state.timeSet ? <Text style={styles.subtext}>Current Alert Set At {this.newDate().hour} : {this.newDate().minutes} {this.newDate().zone}</Text> : 
	      <Text style={styles.subtext}>You Have Not Set Any Alert</Text>}
			</View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  headline: {
  	textAlign: 'center',
  	fontSize: 24,
  },
  subtext: {
  	textAlign: 'center',
  	fontSize: 20,
  	margin: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,  	
    margin: 20,
  },
});


