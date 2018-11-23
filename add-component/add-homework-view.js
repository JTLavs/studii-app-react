import React from 'react';
import {Header} from 'react-native-elements'
import { View, TextInput, Button } from 'react-native';
import { addHomework } from '../homeworks/homework-service'

export default class AddHomework extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: 'Homework Title',
      description: 'Homework Description'
    }
  }

  render() {
    return (
      <View>
          <Header backgroundColor='orange'
                centerComponent={{ text: 'Add Homework', style: { color: '#fff' } }}
                leftComponent={{ icon: 'chevron-left', color: '#fff', 
                onPress: () => {
                  this.props.navigation.goBack(null)
                  }
                }}
                />
            <TextInput 
                style={{height:40, borderColor:'gray', borderWidth:1}}
                onChangeText={(text) =>  this.setState({text})}
                value={this.state.text}/>
            <TextInput 
                multiline={true} 
                numberOfLines={4} 
                style={{height:40, borderColor:'gray', borderWidth:1}}
                onChangeText={(description) =>  this.setState({description})}
                value={this.state.description}/>
            <Button title='Add' onPress = {()=> this.add()}>
                Add
            </Button>
      </View>
    );
  }

  add(){
      addHomework(this.state.text, this.state.description);
      console.log('homework pushed')
      this.props.navigation.state.params.refresh()
      this.props.navigation.goBack(null)
  }
}
 
