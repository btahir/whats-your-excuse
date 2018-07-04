import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, DatePickerIOS } from 'react-native';
import { setLocalNotification } from '../utils/helpers';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }


	handlePress = () => {



		setLocalNotification();
	}

  render() {
    return (
    	<View style={styles.container}>
    		
    		<Text>Set Alert</Text>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
				<TouchableOpacity
				  onPress={this.handlePress}
				  style={styles.button}
				>
					<Text>Submit</Text>
				</TouchableOpacity>
				<Picker
				  selectedValue={1}
				  style={{ height: 50, width: 100 }}
				  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
				  <Picker.Item label="Java" value="java" />
				  <Picker.Item label="JavaScript" value="js" />
				</Picker>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,  	
  },
});


