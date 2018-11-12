import React from 'react';
import SideMenu from 'react-native-side-menu';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import Menu from './Menu'

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen:false,
      selectedItem: 'About'
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenuState(isOpen){
    this.setState({isOpen});
  }

  onMenuItemSelected = item => this.setState({
    isOpen:false,
    selectedItem: item
  })

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected}/>
    return (
      <SideMenu menu={menu}
        isOpen={this.state.isOpen}
        disableGestures={true}>
      <View style={styles.container}>
        <Text style={styles.welcome_message}>Hello James</Text>
        <Image source={{uri : "https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.profile_image}/>
        <FlatList style={styles.list} data={[{subject : 'Maths', score:100}, {subject: 'English', score:50}, {subject: 'Science', score:40}] }
            renderItem = {({item}) => 
            <View style={styles.listitem}>
            <Text>{item.subject}</Text>
            <Text style={{marginLeft:'auto'}}>{item.score}</Text>
            </View>}
        >
        </FlatList>
        <Button onPress={this.toggle} title="Open Menu">Open Menu</Button>
      </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
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
    backgroundColor:'gray',
    padding:20,
    flex:1,
    flexDirection:'row'
  }
});
