import React, { Component } from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
import TreeView from 'react-native-final-tree-view'

class TreeViewExample extends Component {
    state = {
        data: [
            {
                id: 'Grandparent',
                name: 'Grandpa',
                age: 78,
                children: [
                    {
                        id: 'Me',
                        name: 'Me',
                        age: 30,
                        children: [
                            {
                                id: 'Erick',
                                name: 'Erick',
                                age: 10,
                            },
                            {
                                id: 'Rose',
                                name: 'Rose',
                                age: 12,
                            },
                        ],
                    },
                ],
            },
        ],
    }

    componentDidMount() {
        console.log(this.treeView.getRawData())
    }

    render() {
        return (
            <TreeView
                ref={ref => (this.treeView = ref)}
                data={this.state.data}
                deleteOnLongPress
                renderItem={(item, level) => (
                    <TouchableOpacity
                        key = {item.id}>
                        <Text>
                                {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }
}

export default TreeViewExample
