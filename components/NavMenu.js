import React, { Component } from 'react';
import { View} from 'react-native'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

class NavMenu extends Component {
    render() {
        return (
            <View>
                <NavBar>
                    <NavTitle>
                        {"App"}
                    </NavTitle>
                    <NavGroup>
                        <NavButton onPress={alert('Button 1')}>
                            <NavButtonText>
                                {"Button 1"}
                            </NavButtonText>
                        </NavButton>
                        <NavButton onPress={alert('Button 2')}>
                            <NavButtonText>
                                {"Button 2"}
                            </NavButtonText>
                        </NavButton>
                    </NavGroup>
                </NavBar>
            </View>
        );
    }
}
export default NavMenu
