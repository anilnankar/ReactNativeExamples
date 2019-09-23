import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home';
import State from './components/State';
import Props from './components/Props';
import List from './components/List';
import Flexbox from './components/Flexbox';
import TextInput from './components/TextInput';
import HttpApi from './components/HttpApi';
import Buttons from './components/Buttons';
import Animations from './components/Animations';
import WebView from './components/WebView';
import Modal from './components/Modal';
import ActivityIndicator from './components/ActivityIndicator';
import Picker from './components/Picker';
import Switch from './components/Switch';
import Text from './components/Text';
import Alert from './components/Alert';
import Geolocation from './components/Geolocation';
import AsyncStorage from './components/AsyncStorage';
import TooltipMenu from './components/TooltipMenu';
import MaterialMenu from './components/MaterialMenu';
import Dropdown from './components/Dropdown';
import NavMenu from './components/NavMenu';
import CircularMenu from './components/CircularMenu';
import RadioSelector from './components/RadioSelector';
import Table from './components/Table';
import EditableTable from './components/EditableTable';
import TreeView from './components/TreeView';
import ItemSelect from './components/ItemSelect';
import Autocomplete from './components/Autocomplete';
import MapView from './components/MapView';
// import ReviewModal from './components/ReviewModal';
//import DropdownList from './components/DropdownList';
//import { State, List } from './components/Index';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    State: { screen: State},
    Props: { screen: Props},
    List: { screen: List},
    Flexbox: { screen: Flexbox},
    TextInput: { screen: TextInput},
    HttpApi: { screen: HttpApi},
    Buttons: { screen: Buttons},
    Animations: { screen: Animations},
    WebView: { screen: WebView},
    Modal: { screen: Modal},
    ActivityIndicator: { screen: ActivityIndicator},
    Picker: { screen: Picker},
    Switch: { screen: Switch},
    Text: { screen: Text},
    Alert: { screen: Alert},
    Geolocation: { screen: Geolocation},
    AsyncStorage: { screen: AsyncStorage},
    TooltipMenu: { screen: TooltipMenu},
    MaterialMenu: { screen: MaterialMenu},
    Dropdown: { screen: Dropdown},
    NavMenu: { screen: NavMenu},
    CircularMenu: { screen: CircularMenu},
    RadioSelector: { screen: RadioSelector},
    Table: { screen: Table},
    EditableTable: { screen: EditableTable},
    TreeView: { screen: TreeView},
    ItemSelect: { screen: ItemSelect},
    Autocomplete: { screen: Autocomplete},
    MapView: { screen: MapView},
    // ReviewModal: { screen: ReviewModal},
    //DropdownList: { screen: DropdownList},
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
