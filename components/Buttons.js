import React, { Component } from 'react'
import { View, Button } from 'react-native'

class Buttons extends Component {
    alertButton = (item) => {
        alert(item)
    }
    render() {
        return (
            <View>
                <Button
                    onPress = {() => this.alertButton("Button Pressed!")}
                    title = "Red button!"
                    color = "red"
                />
            </View>
        )
    }
}
export default Buttons
