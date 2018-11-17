import React from 'react';
import {Header} from 'react-native-elements'
import { View } from 'react-native';
import {toggle, updateMenuState, onMenuItemSelected} from '../sideMenu/menuToggle.js' 
import HomeworkList from './homework-list-view.js'

export default class HomeworkView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen:false,
      selectedItem: 'Homeworks'
    }
    this.toggle = toggle.bind(this);
    this.updateMenuState = updateMenuState.bind(this)
    this.onMenuItemSelected = onMenuItemSelected.bind(this)
  }

  static navigationOptions = {
    drawerLabel: 'Homework',
  }

  render() {
    return (
      <View>
          <Header 
            leftComponent={{icon: 'menu', color: '#fff', onPress: this.toggle}}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            backgroundColor="orange"/>
          <HomeworkList></HomeworkList>
      </View>
    );
  }
}
 
