import React, { Component } from 'react';
import SelectPicker from 'react-native-form-select-picker';
import {View} from "react-native";

export default class RadioSelector extends Component {
    state = {
        selected: 'apple'
    }

    render() {
        return (
            <View>
                <SelectPicker
                onValueChange={(value) => {
                    // Do anything you want with the value.
                    // For example, save in state.
                    this.setState({
                        selected: value
                    })
                }}
                selected={this.state.selected}>
                <SelectPicker.Item label="Apple" value="apple" />
                <SelectPicker.Item label="Banana" value="banana" />
                <SelectPicker.Item label="Orange" value="orange" />
                </SelectPicker>
            </View>
    )
    }
}
