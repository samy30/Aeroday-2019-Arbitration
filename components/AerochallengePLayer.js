import React, { Component } from 'react';
import {View, Text,Button,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from 'react-native';



class Item_Component extends Component {

    constructor(props){
        super(props);
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <View>
                {this.props.items.map((item, index) => {
                    return (
                        <View  key = { index }>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() =>this.props.navigation.navigate('Aerochallenge',{ id:index, name:item.name})}
                            >
                                <Text style={styles.textStyle}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e95dc',
        borderWidth: 1,
        borderColor: '#ffffff',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 10,
        width: 300
    }};

export default withNavigation(Item_Component);
