import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native'

export default class Loading_Component extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 10}}>
                <ActivityIndicator size="large" color="#437C90" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }


});


