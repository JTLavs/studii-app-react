import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
      <View style={{padding:30}}>
        <Text style={{fontSize:20}}>
          Thursday 20th November
        </Text>
      </View>

      <TouchableOpacity>
        <View style={styles.drawerMenuItemContainer}>
            <Text style={{...styles.drawerMenuItemText, color:'red'}}
                onPress={() => navigation.navigate('Homework')}>
                Homework
            </Text>
            <Icon name="description" color="red"/>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.drawerMenuItemContainer}>
            <Text style={{...styles.drawerMenuItemText, fontColor:'orange'}}>
                Profile
            </Text>
            <Icon name="face" color='orange'/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Exam')}>
          <View style={styles.drawerMenuItemContainer}>
            <Text style={{...styles.drawerMenuItemText, color:'green'}}>
                Exams
            </Text>
            <Icon name="face" color='green'/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Homework')}>
          <View style={styles.drawerMenuItemContainer}>
            <Text style={{...styles.drawerMenuItemText, color:'blue'}}>
                Clubs/Societies
            </Text>
            <Icon name="face" color='blue'/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Homework')}>
          <View style={styles.drawerMenuItemContainer}>
            <Text style={{...styles.drawerMenuItemText, color:'gray'}}>
                Settings
            </Text>
                <Icon name="face" color='gray'/>
          </View>
        </TouchableOpacity>

        <View style={styles.drawerMenuItemContainer}>
          <Text style={{...styles.drawerMenuItemText, color:'black'}}
              onPress={() => navigation.navigate('Homework')}>
              About Studii
          </Text>
          <TouchableOpacity>
              <Icon name="face" color='black'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
  },
  drawerMenuItemContainer:{
    flexDirection:'row',
    padding:10,
    marginBottom:5,
    borderBottomColor:'#f6f6f6',
    borderBottomWidth:2,
    fontWeight: 'bold',
    justifyContent:'space-between'
  },
  drawerMenuItemText:{
    fontSize:18
  }
})
