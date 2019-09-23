import React, { Component } from 'react'
import { View, Switch, StyleSheet } from 'react-native'
import PresentationalComponent from "./PresentationalComponent";

const SwitchExample = (props) => {
    return (
        <View style = {styles.container}>
            <Switch
                onValueChange = {props.toggleSwitch1}
                value = {props.switch1Value}/>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
})
export default SwitchExample
