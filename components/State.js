import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

class State extends React.Component {
    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
    }
    render() {
        return (
            <View>
                <Text> {this.state.myState} </Text>
            </View>
        );
    }
}
export default State
