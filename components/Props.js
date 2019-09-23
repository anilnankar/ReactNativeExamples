import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

class Props extends React.Component {
    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod.'
    }
    updateState = () => {
        this.setState({ myState: 'The state is updated' })
    }
    render() {
        return (
            <View>
                <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
            </View>
        );
    }
}
export default Props
