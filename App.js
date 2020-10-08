import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import CharacterScreen from './screens/CharacterScreen';
import AlarmScreen from './screens/AlarmScreen';
import QuotesScreen from './screens/QuotesScreen';


const MainNav = createStackNavigator({
  Home: HomeScreen,
  Character: CharacterScreen,
  Alarm: AlarmScreen,
  Quotes: QuotesScreen,
},{
  headerMode: 'none'
});

export default createAppContainer(MainNav);
