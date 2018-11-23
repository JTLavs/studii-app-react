import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Header} from 'react-native-elements'

export default class ExamDetail extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.props.navigation
    this.state = {exam : this.props.item}
  }

  static navigationOptions = {
    header:null
  }

  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.title}>
                {this.state.exam.title}
            </Text>
            <FlatList style={styles.list} data={this.state.exam.checklist}
                renderItem = {({item}) => 
                <View style={styles.listitem}>
                  <Text>
                    {item.title}
                </Text>
                <Text style={{marginLeft:'auto'}}>
                    {item.done}
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
    alignItems: 'center'
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
    flex:1,
    backgroundColor:'gray',
    padding:20,
    flexDirection:'row'
  }
});
