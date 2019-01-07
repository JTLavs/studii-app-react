import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class HomeworkDetail extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.props.navigation
    this.state = {homework : this.props.item}
  }

  render() {
    return (
          <View style={styles.container}>
                <Image 
                source={{uri : "https://facebook.github.io/react-native/docs/assets/favicon.png"}} 
                style={styles.profile_image}/>

                <Text style={styles.welcome_message}>
                    {this.state.homework.description}
                </Text>

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
});
