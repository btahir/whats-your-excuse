import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, DatePickerIOS, Platform } from 'react-native';
import { setLocalNotification } from '../utils/helpers';
import Picker from './Picker';

export default class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {

  }

	handlePress = () => {
		setLocalNotification();
		alert(this.state.chosenDate.getHours());
	}

	platformPicker = () => {
	return Platform.OS === 'ios' ? true : false 
	}

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
  	const platformPicker = this.props.platformPicker;
    return (
    	<View style={styles.container}>
    		
    		<Text style={styles.headline}>What Time Do You Want To Get Your Daily Motivation Boost?</Text>
    		{Platform.OS === 'ios' ?
		    	<DatePickerIOS
		          date={this.state.chosenDate}
		          onDateChange={this.setDate}
		          mode='time'
		      /> : 
		      <View>Android picker</View>}

				<TouchableOpacity
				  onPress={this.handlePress}
				  style={styles.button}
				>
					<Text>Submit</Text>
				</TouchableOpacity>
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
  	fontSize: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,  	
  },
});


