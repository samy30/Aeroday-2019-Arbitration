import React, {Component} from 'react';
import {ButtonGroup} from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';
import firebase from 'firebase'
import {StyleSheet, ActivityIndicator, View, Text,Button} from 'react-native';
import {Alert, YellowBox} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';



export default class Scoreboard extends Component {


    static navigationOptions = {
        header: null,
        tabBarLabel: 'Standing',
            tabBarIcon: ({ focused }) => (
            <TabBarIcon
            focused={focused}
             name={'md-trophy'}
            />
        ),
    };

    constructor(props, context, state) {
        super(props, context);
        this.state = {
            isLoading: true,
            globalData: [],
            filter: 0,
            userRank: 1,
            user : {
                name:'-1',
                score :0
            }

        };
        YellowBox.ignoreWarnings(['Setting a timer']);

    }

    componentDidMount() {
        this.params = this.props.navigation;
    }

    componentWillMount() {

        const ref = firebase.database().ref('players');

        ref.on('value', snapshot => {
          //console.log(snapshot.val())
            this.setState({
                globalData: snapshot.val(),
                isLoading: false

            })

        });



    }


    alert = (title, body) => {
        Alert.alert(
            title, body, [{
                text: 'OK', onPress: () => {
                }
            },],
            {cancelable: false}
        )
    };


    sort = (data) => {
        const sorted = data && data.sort((item1, item2) => {
            return item2.score - item1.score;
        });
        let userRank = sorted.findIndex((item) => {
            return item.name === this.state.user.name;
        });
        this.setState({userRank: ++userRank});
        return sorted;
    };

    renderHeader() {
        const { goBack } = this.props.navigation;
        if(this.state.user.name !== '-1') {
            return (
                <View colors={['#1da2c6', '#1695b7']}
                      style={{backgroundColor: '#119abf', padding: 15, paddingTop: 35, alignItems: 'center'}}>
                    <Text style={{fontSize: 25, color: 'white',}}>Leaderboard</Text>
                    
                    </View>
            )
        }
        else
        {
            return (     <View colors={['#1da2c6', '#1695b7']}
                                          style={{backgroundColor: '#119abf', padding: 15, paddingTop: 35, alignItems: 'center'}}>
                <Text style={{fontSize: 25, color: 'white',}}>Leaderboard</Text>
                </View>
             );
        }

    }

    render() {

        this.params = this.props.navigation.state.params;


        if (typeof this.params.user === 'undefined') {
        } else {
            this.state.user=this.params.user;

        }





            const props = {
            labelBy: 'name',
            sortBy: 'score',
            data: this.state.filter > 0 ? this.state.friendData : this.state.globalData,
            icon: 'iconUrl',
            onRowPress: (item, index) => {
                this.alert(item.name + " clicked", item.score + " points, wow!")
            },
            sort: this.sort
        };

        if (this.state.isLoading) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            )
        }

        return (
            <View style={{flex: 1, backgroundColor: 'white',}}>
                {
                    this.renderHeader()

                }
                <Leaderboard {...props} />
            </View>
        )
    }
}

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});