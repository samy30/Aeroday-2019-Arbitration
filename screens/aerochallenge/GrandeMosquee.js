import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'galio-framework';
import CircleButton from 'react-native-circle-button';

class GrandeMosquee extends  React.Component {
  render () {
    return (

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
      }}>
    <Button color={this.props.obj[0]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(2,0,15,15)}>Effectuer 1 tour</Button>
    <Text>    {this.props.aa}           </Text>
    <Button color={this.props.obj[1]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(2,1,30,30)}>Effectuer 2 tours</Button>
    <Text>               </Text>
    <Button color={this.props.obj[2]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(2,2,45,45)}>Effectuer 3 tours</Button>
    <Text>               </Text>
      </View>
    <View style={{
    flex: 1,
    flexDirection: 'column'
  }}>
    <Button color='error' iconSize={7} size='small' style={ { width: 170, height: 170, borderRadius: 170/2}}>Collision</Button>

  </View>
      </View>
    );
  }
}

export default GrandeMosquee ;
