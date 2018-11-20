import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getHomeworks, getStatus } from './homework-service';

export default class HomeworkList extends React.Component {
  constructor(props){
    super(props);
    var homeworks = getHomeworks();
    this.state = { homeworks : homeworks }
    this.getStatus = getStatus.bind(this)
    this.formatDate = this.formatDate.bind(this)
  }

  render() {
    return (
        <View>
          <FlatList  style={styles.list} data={this.state.homeworks}
              renderItem = {({item}) => 
              <View style={styles.listitem}>
                <View>
                    <Text style={styles.homeworktitle}>
                      {item.subject}
                    </Text>
                    <Text>
                      {item.description}
                    </Text>
                    <Text>
                      {this.formatDate(item.dueDate)}
                    </Text>
                </View>
                <Text style={styles.status}>{this.getStatus(item.done)}</Text>
              </View>}/>
          </View>
    );
  }

  formatDate(dueDate){
    var days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    var months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    var dateObj = new Date(dueDate);
    return days[dateObj.getDay()] + ' ' + dateObj.getDate() + ' ' 
          + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear()
  }

  getOrdinalOfDate(date){
    switch(date % 10){
      case 1 : return 'st';
      case 2 : return 'nd';
      case 3 : return 'rd';
      default: return 'th';
    }
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
