import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Hello = () => (
  <View style={styles.container}>
    <Text>Hello!</Text>
  </View>
  );

const Goodbye = () => (
  <View style={styles.container}>
    <Text>Goodbye!</Text>
  </View>
  );

const Tabs = createBottomTabNavigator({
  Hello: {
    screen: Hello,
    navigationOptions: {
      tabBarLabel: 'Hello',
      tabBarIcon: <MaterialIcons name='question-answer' size={30} color={'gray'} />
    },
  },
  Quiz: {
    screen: Goodbye,
    navigationOptions: {
      tabBarLabel: 'Goodbye',
      tabBarIcon: <MaterialIcons name='question-answer' size={30} color={'gray'} />
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
