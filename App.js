import React from 'react'
import { DrawerNavigator, StackNavigator} from 'react-navigation';
import {Button} from 'react-native-elements'
import Profile from './Profile';
import Homework from './homeworks/homework-view'
import add from './add-component/add'

const HomeworkStack = StackNavigator({
  screen: Homework
})
const ProfileStack = StackNavigator({
  screen: Profile
})
export const theDrawer = DrawerNavigator({
  Homework: { screen: HomeworkStack},
  Profile: { screen: ProfileStack }
});

export const MainStack = StackNavigator(
  {
    Drawer: {
      screen: theDrawer,
      navigationOptions: {
        header:null
      }
    },
    Add: {
      screen: add,
      navigationOptions: {
        header:null
      }
    }
  }
)

export default class App extends React.Component {
	render() {
		return <MainStack />;
	}
}