import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import { Text, Button } from 'galio-framework'
 
class Home extends React.Component {
 
  render() {
    return (
        <View style={styles.container}>
           <ImageBackground 
           source={require('../assets/images/acc.png')} 
           style={{justifyContent : 'flex-end',width: '100%', height: '100%'}}>
             <Button 
          		 style={styles.button}
                 color={'rgb(120, 10, 10)'}
           		 onPress={() =>this.props.navigation.navigate('Players')}>
           		 <Text h3 bold color={'rgb(170, 120, 120)'} >
           		 WELCOME
           		 </Text>
          </Button>
          </ImageBackground>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column-reverse',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      
  },
  button : {
    flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      height:40,
      width: 360,
      position:'absolute',
  }
})

export default Home;
