import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight} from 'react-native'
import { Header } from 'react-native-elements'
import { getHomeworks, getStatus } from './homework-service';
import { formatDate } from '../DateHelper'

export default class HomeworkView extends React.Component {
  constructor(props){
    super(props);
    var homeworks = getHomeworks()
    this.state = {homeworks: homeworks}
    this.refresh = false;
  }
  static navigationOptions = {
    header : null
  }

  refreshFunction(){
    var homeworksFromService = getHomeworks()
    this.setState({homeworks : homeworksFromService})
  }

  render() {
    return (
      <View>
        <Header backgroundColor="orange"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Homework', style: { color: '#fff', fontSize:20 }}}
          rightComponent={{ icon: 'add', color: '#fff',
          onPress: () => this.props.navigation.navigate('Add', 
          {
            viewType: 'homework',
            refresh: this.refreshFunction.bind(this)
          }),
          underlayColor: 'orange'}}/>
         <View>
          <FlatList data={this.state.homeworks} 
                    extraData={this.state} 
                    style={styles.list} 
              renderItem = {({item}) => 
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', 
                  {
                  viewType: 'homework',
                  item: item
                  })}
              >
                <View style={styles.listitem}>
                  <View>
                      <Text style={styles.homeworktitle}>
                        {item.subject}
                      </Text>
                      <Text>
                        {item.description}
                      </Text>
                      <Text>
                        {formatDate(item.dueDate)}
                      </Text>
                  </View>
                  <Text style={styles.status}>{getStatus(item.done)}</Text>  
                </View>
              </TouchableHighlight>}/>
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
    homeworktitle:{
        fontSize:20
    },
    status:{
      marginLeft:'auto'
    }
})
 
