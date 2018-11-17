import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width / 1.5,
    height: window.height,
    backgroundColor: 'white',
    borderRightColor:'black',
    borderRightWidth:1,
    borderStyle:'solid',
  },
  name: {
    fontSize:30,
    marginTop: 30,
    padding:10,
  },
  header_view:{
      alignItems:'center'
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    fontWeight: '300',
    width:'100%',
    padding:10,
    marginTop:5,
    color:'green',
    backgroundColor:'lightgray'
  },
  profile_image: {
    height:100,
    width:100,
    borderRadius:50
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <View scrollsToTop={false} style={styles.menu}>
      <View style={styles.header_view}>
        <Text style={styles.name}>Hello James</Text>
      <Image 
        source={{uri : "https://facebook.github.io/react-native/docs/assets/favicon.png"}}     
        style={styles.profile_image}/>
      <Text
        onPress={() => onItemSelected('homework')}
        style={styles.item}>
        Homework
      </Text>
    </View>

    <View>        
      <Text
        onPress={() => onItemSelected('timetable')}
        style={styles.item}>
        Timetable
      </Text>
      </View>

    <View>
      <Text
        onPress={() => onItemSelected('exam')}
        style={styles.item}>
        Exams
      </Text>
    </View>

    <View>
      <Text
        onPress={() => onItemSelected('clubssocieties')}
        style={styles.item}>
        Clubs and Societies
      </Text>
    </View>
    </View>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};