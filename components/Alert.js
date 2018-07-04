import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, DatePickerIOS, Platform } from 'react-native';
import { setLocalNotification } from '../utils/helpers';
import Picker from './Picker';

export default class Alert extends React.Component {


	handlePress = () => {
		setLocalNotification();
	}

  render() {
    return (
    	<View style={styles.container}>
    		
    		<Text style={styles.headline}>What Time Do You Want To Get Your Daily Motivation Boost?</Text>
    		<Picker />

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


