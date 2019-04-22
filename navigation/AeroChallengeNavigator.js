import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Voting, Result, Scoreboard} from '../screens'

const TabNavigator = createBottomTabNavigator({
    Voting: Voting,
    Result: Result,
    Scoreboard: Scoreboard
  });
  
  export default createAppContainer(TabNavigator);