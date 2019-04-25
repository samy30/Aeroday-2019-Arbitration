import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {Home, Players} from '../screens'
import AerochallengeNavigator from './AeroChallengeNavigator'

/*const AerochallengeNavigatorStack = createStackNavigator({
  Aerochallenge: AerochallengeNavigator,
    navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
        title: 'Profile',
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
      })
});
*/
export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Players: Players,
  Aerochallenge: {
    screen: AerochallengeNavigator,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name,
    }),
  },
});