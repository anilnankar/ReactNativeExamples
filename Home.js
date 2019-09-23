import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default class Home extends React.Component {
    state = {
        tutorials: [
            {id: 1, name: 'State', link:'State'},
            {id: 2, name: 'Props', link:'Props'},
            {id: 3, name: 'List', link:'List'},
            {id: 4, name: 'Flexbox', link:'Flexbox'},
            {id: 5, name: 'Text Input', link:'TextInput'},
            {id: 6, name: 'HTTP API', link:'HttpApi'},
            {id: 7, name: 'Buttons', link:'Buttons'},
            {id: 8, name: 'Animations', link:'Animations'},
            {id: 9, name: 'Web View', link:'WebView'},
            {id: 10, name: 'Modal', link:'Modal'},
            {id: 11, name: 'Activity Indicator', link:'ActivityIndicator'},
            {id: 12, name: 'Picker', link:'Picker'},
            {id: 13, name: 'Switch', link:'Switch'},
            {id: 14, name: 'Text', link:'Text'},
            {id: 15, name: 'Alert', link:'Alert'},
            {id: 16, name: 'Geolocation', link:'Geolocation'},
            {id: 17, name: 'Async Storage', link:'AsyncStorage'},
            {id: 18, name: 'Tooltip Menu', link:'TooltipMenu'},
            {id: 19, name: 'Material Menu', link:'MaterialMenu'},
            {id: 20, name: 'Dropdown Menu', link:'Dropdown'},
            {id: 21, name: 'Nav Menu', link:'NavMenu'},
            {id: 22, name: 'Circular Menu', link:'CircularMenu'},
            {id: 23, name: 'Radio Selector', link:'RadioSelector'},
            {id: 24, name: 'Table', link:'Table'},
            {id: 25, name: 'Editable Table', link:'EditableTable'},
            {id: 26, name: 'Tree', link:'TreeView'},
            {id: 27, name: 'Item Selection', link:'ItemSelect'},
            {id: 28, name: 'Autocomplete', link:'Autocomplete'},
            {id: 29, name: 'Map View', link:'MapView'},
            // {id: 29, name: 'Review Modal', link:'ReviewModal'},
            // {id: 23, name: 'Dropdown List', link:'DropdownList'},
        ]
    }


    render() {
        return (
                <View>
                    <ScrollView>
                        {
                            this.state.tutorials.map((item, index) => (
                                <TouchableOpacity
                                    key = {item.id}
                                    style = {styles.container}
                                    onPress = {() => this.props.navigation.navigate(item.link)}>
                                    <Text style = {styles.text}>
                                        {item.id}. {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#d9f9b1',
    },
    text: {
        color: '#4f603c'
    }
})
