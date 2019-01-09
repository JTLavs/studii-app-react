import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native'
import { Header } from 'react-native-elements'
import { getExams } from './exam-service';
import { formatDate } from '../DateHelper'

export default class HomeworkView extends React.Component {

  constructor(props){
    super(props);
    var examsFromService = getExams()
    this.state = {exams: examsFromService}
  }
  static navigationOptions = {
    header : null
  }

  refreshFunction(){
    this.setState({exams : getExams()})
  }

  render() {
    return (
      <View>
        <Header backgroundColor="green"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Exams', style: { color: '#fff', fontSize:20 }}}
          rightComponent={{ icon: 'add', color: '#fff',
          onPress: () => this.props.navigation.navigate('Add',
          {
            viewType: 'exam',
            refresh: this.refreshFunction.bind(this)
          }),
          underlayColor: 'green'}}/>
         <View>
          <FlatList data={this.state.exams} extraData={this.state} style={styles.list}
              renderItem = {({item}) =>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail',
              {
                viewType: 'exam',
                item: item
              })}>
              <View style={styles.listitem}>
                <View>
                  <Text style={styles.listTitle}>{item.subject}</Text>
                  <Text>{item.title}</Text>
                  <Text>{formatDate(item.date)}</Text>
                </View>
              </View>
              </TouchableHighlight>}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    list: {
      width:'100%'
    },
    listitem:{
      backgroundColor:'#fffffa',
      borderTopColor: 'lightgray',
      borderTopWidth:2,
      padding:20,
      flex:1,
      flexDirection:'row'
    },
    listTitle:{
        fontSize:20
    },
    status:{
      marginLeft:'auto'
    }
})
