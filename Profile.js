import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Header} from 'react-native-elements'

export default class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  static navigationOptions = {
    header:null
  }

  render() {
    return (
        <View>
          <Header backgroundColor='green'
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Profile', style: { color: '#fff', fontSize:20 } }}/>
          <View style={styles.container}>
            <Text style={styles.welcome_message}>Hello James</Text>
            <Image source={{uri : "https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.profile_image}/>
            <FlatList style={styles.list} data={[{subject : 'Maths', score:100}, {subject: 'English', score:50}, {subject: 'Science', score:40}] }
                renderItem = {({item}) => 
                <View style={styles.listitem}>
                  <Text>{item.subject}</Text>
                  <Text style={{marginLeft:'auto'}}>{item.score}</Text>
                </View>}/>
            </View>
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
