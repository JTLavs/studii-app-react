import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import HomeworkList from './homework-list-view.js'
import {Constants} from 'expo'

export default class HomeworkView extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
      label: 'Teams',
      title: "Homework",
      headerStyle: {
        backgroundColor: 'orange',
        marginTop: 0
      },
  }

  render() {
    return (
          <HomeworkList></HomeworkList>
    );
  }
}
 
