import React, {Component} from 'react';
import { Text, View } from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';

class LanguageSelectionScreen extends Component {
    render() {
        const data = [
            { firstLetter: 'A', displayName: 'English 1', name: 'English' },
            { firstLetter: 'B', displayName: 'Marathi 1', name: 'Marathi' }
        ];

        return (
            <ReactNativeItemSelect
                data={data}
                itemComponent={
                    item => (
                        <View>
                            <Text style={{ textAlign: 'center', color: '#696969', fontWeight: 'bold' , fontSize: 35 }}>{item.firstLetter}</Text>
                            <Text style={{ textAlign: 'center', color: '#696969', fontWeight: 'bold' }}>{item.displayName}</Text>
                        </View>
                    )
                }
                onSubmit={item => navigate('Result')}
            />
        );
    }
}

export default LanguageSelectionScreen
