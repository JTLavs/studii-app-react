import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getHomeworks, getStatus } from './homework-service';

export default class HomeworkList extends React.Component {
  constructor(props){
    super(props);
    var homeworks = getHomeworks();
    this.state = { homeworks : homeworks }
    this.getStatus = getStatus.bind(this)
  }

  render() {
    return (
        <View style={styles.container}>
          <FlatList style={styles.list} data={this.homeworks}
              renderItem = {({item}) => 
              <View style={styles.listitem}>
                <View>
                    <Text style={styles.homeworktitle}>
                      {item.subject}
                    </Text>
                    <Text>
                      {item.description}
                    </Text>
                </View>
                <Text style={status}>{this.getStatus(item.done)}</Text>
              </View>}/>
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
});
