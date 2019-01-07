import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Header} from 'react-native-elements'

export default class ExamDetail extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.props.navigation
    this.state = {exam : this.props.item}
  }

  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.title}>
                {this.state.exam.title}
            </Text>
            <Text>
              Revision checklist: 
            </Text>
            <FlatList style={styles.list} data={this.state.exam.checklist}
                renderItem = {({item}) => 
                <View style={styles.listitem}>
                  <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.done.toString()}
                </Text>
                </View>}/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex:1
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
