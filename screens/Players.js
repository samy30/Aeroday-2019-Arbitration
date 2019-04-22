import React from 'react';
import { Text, ScrollView, Button, View, StyleSheet, BackHandler } from 'react-native';
import { db } from "../config";
import AerochallengePlayer from '../components/AerochallengePLayer.js';
import { withNavigation } from 'react-navigation';
import Loading_Component from "../components/Loading_Component";

const ref = db.ref("players");

class Players extends React.Component {
  constructor(props){
    super(props);
  }

    static navigationOptions = {
    title: 'Aerochallenge',
   };

   state = {
     valueArray:[],
     isLoading:false
  };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillMount(){
        this.setState({isLoading:true} );
        ref.once('value').then(snapshot => {
            var data = snapshot.val();
            var items = Object.values(data);
            this.setState({valueArray:items,
                                isLoading:false
                                });

        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate('Challenges');
        return true;
    };


    render() {
        const { goBack } = this.props.navigation;
        var ls = (this.state.isLoading) ? <Loading_Component/> : null ;
        return (
            <ScrollView>
            <View style={styles.container}>
                {ls}
                {!this.state.valueArray.isEmpty  ? (
                    <AerochallengePlayer items={this.state.valueArray} />
                ) : (
                    <Text>No items</Text>
                )}
            </View>
            </ScrollView>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaedf2',

    },
});

export default Players;
