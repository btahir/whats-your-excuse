import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { setLocalNotification } from './utils/helpers';

const Hello = () => (
  <View style={styles.container}>
    <Text>Hello!</Text>
  </View>
  );

const Goodbye = () => (
    <WebView
      source={{uri: 'https://whatsyourexcuse2018.wordpress.com/daily-excuse-killer'}}
      style={styles.container}
    />
  );

const Tabs = createBottomTabNavigator({
  Hello: {
    screen: Hello,
    navigationOptions: {
      tabBarLabel: 'Set Reminder',
      tabBarIcon: <MaterialIcons name='timer' size={30} color={'gray'} />
    },
  },
  Quiz: {
    screen: Goodbye,
    navigationOptions: {
      tabBarLabel: 'Today\'s Excuse Killer',
      tabBarIcon: <MaterialIcons name='person-pin' size={30} color={'gray'} />
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      color: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      height: 56,
      borderColor: 'gray',
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
  },
});

export default class App extends React.Component {

  render() {
    return (
      <Tabs style={styles.container} />
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
});
