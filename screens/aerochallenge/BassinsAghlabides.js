import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'galio-framework';
import CircleButton from 'react-native-circle-button';

class BassinsAghlabides extends  React.Component {
  render () {
    return (

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
      }}>
    <Button color={this.props.obj[0]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(3,0,8,8)}>Bassin 1 hauteur 1</Button>
    <Text>               </Text>
    <Button color={this.props.obj[1]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(3,1,4,4)}>Bassin 1 hauteur 2</Button>
    <Text>               </Text>
    <Button color={this.props.obj[2]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(3,2,5,5)}>Bassin 2 hauteur 1</Button>
    <Text>               </Text>
    <Button color={this.props.obj[3]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(3,3,4,4)}>Bassin 2 hauteur 2</Button>
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

export default BassinsAghlabides ;
