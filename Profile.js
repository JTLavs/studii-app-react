import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, FlatList} from 'react-native';
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
            <FlatList style={styles.list} data={[{name : 'Maths', score:100}, {name: 'English', score:50}, {name: 'Science', score:40}] }
                renderItem = {({item}) => 
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', 
                {
                viewType: 'subject',
                item: item
                })}>
                <View style={styles.listitem}>
                  <Text>{item.name}</Text>
                  <Text style={{marginLeft:'auto'}}>{item.score}</Text>
                </View>
                </TouchableHighlight>}/>
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
    backgroundColor:'#eaeaea',
    padding:20,
    flexDirection:'row'
  }
});
