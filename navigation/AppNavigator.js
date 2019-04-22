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
  Home: Home,
  Players: Players,
  Aerochallenge: AerochallengeNavigator,
});