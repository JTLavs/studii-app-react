import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { getExamsBySubject } from '../exams/exam-service';

export default class SubjectDetail extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.props.navigation
    this.state = {subject : this.props.item}
  }

  getScore(score){
      return (score > -1) ? score + '%' : 'No mark recorded.'
  }

  render() {
    return (
        <View style={styles.container}>
            <Image source={{uri : "https://facebook.github.io/react-native/docs/assets/favicon.png"}} 
                style={styles.profile_image}/>
            <Text style={styles.welcome_message}>
                {this.state.subject.name}
            </Text>
            <Text>
                Exams for this subject:
            </Text>
            <FlatList style={styles.list} data={ getExamsBySubject(this.state.subject.name) }
                renderItem = {({item}) => 
                <View style={styles.listitem}>
                  <Text>
                    {item.title}
                </Text>
                <Text>
                    {this.getScore(item.score)}
                </Text>
                </View>}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex:1,
  },
  profile_image: {
    height:100,
    width:100,
    borderRadius:50
  },
  welcome_message: {
    fontSize:20,
    textTransform:'uppercase'
  },
  list: {
    marginTop:20,
    width:'100%'
  },
  listitem:{
    padding:20,
    flexDirection:'row',
    justifyContent: 'space-between'
  }
});
