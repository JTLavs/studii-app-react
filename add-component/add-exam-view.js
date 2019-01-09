import React from 'react';
import {Header} from 'react-native-elements'
import { View, StyleSheet, TextInput, Text, TouchableHighlight} from 'react-native';
import { addHomework } from '../homeworks/homework-service'
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'

export default class AddExam extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: 'Exam Title',
      description: 'Exam Description'
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Header backgroundColor='orange'
                centerComponent={{ text: 'Add Exam', style: { color: '#fff', fontSize:20 }}}
                leftComponent={{ icon: 'chevron-left', color: '#fff',
                onPress: () => {
                  this.props.navigation.goBack(null)
                  }
                }}
                />

        <View style={{padding:20}}>

            <Dropdown
            label="What subject?"
               data={this.state.data}
               fontSize={18}
               labelFontSize={20}
               containerStyle={{marginTop:50}}
               baseColor="green"
               itemColor="green"
               pickerStyle={{borderRadius:2, borderColor:'green', borderWidth:1}}
               itemTextStyle={{fontSize:15}}
               textColor="black"
               selectedItemColor="black"
               dropdownOffset={{top:0}}
               value="Banana"
               inputContainerStyle={{borderBottomColor: 'green', borderColor:'green', borderWidth:1, paddingLeft:10, borderRadius:2, backgroundColor:'white'}}
                   />

              <Text style={{fontSize:20, color:'green'}}>For when?</Text>
              <DatePicker
                   style={{ width: '100%', marginBottom:20, color:'black',}}
                   date={this.state.date}
                   mode="date"
                   showIcon={false}
                   placeholder="DD-MM-YYYY"
                   format="DD-MM-YYYY"
                   minDate="01-05-2016"
                   maxDate="01-06-2016"
                   confirmBtnText="Confirm"
                   cancelBtnText="Cancel"
                   customStyles={{
                     dateInput: {backgroundColor:'white',
                     padding:10,
                     justifyContent: 'flex-start',
                     alignItems: 'flex-start'
                    },
                     placeholderText: {color:'black', fontSize:18}
                   }}
                 />

              <Text style={{fontSize:20, color:'green'}}>What is needed?</Text>
              <TextInput
                  multiline={true}
                  numberOfLines={3}
                  style={[styles.inputfield, {height:100, fontSize: 15}]}
                  clearTextOnFocus={true}
                  onChangeText={(description) =>  this.setState({description})}
                  value={this.state.description}/>




      </View>

            <View style={{justifyContent:'space-between', alignItems:'center'}}>
              <TouchableHighlight
                style={styles.addbutton}
                underlayColor="white"
                title='Add'
                onPress = {()=> this.add()}>
                  <Text style={{fontSize:20, color:'white'}}>Add</Text>
              </TouchableHighlight>
            </View>
      </View>
    );
  }

  /* add(){
      addHomework(this.state.text, this.state.description);
      console.log('homework pushed')
      this.props.navigation.state.params.refresh()
      this.props.navigation.goBack(null)
  }*/
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f5f5f5',
    flex:1
  },
  inputfield: {
    padding:10,
    color:'black',
    backgroundColor:'white',
    borderWidth:1,
    marginBottom:20,
    borderColor:'black',
    borderRadius:2,
  },
  addbutton: {
    backgroundColor: 'green',
    justifyContent:'center',
    padding:20,
    borderRadius:20,
    color:'white',
    borderColor:'#aaaaaa',
    borderWidth:1,
  }
});
