import React from 'react'
import { DrawerNavigator, StackNavigator, HeaderBackButton} from 'react-navigation';
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
  Homework: { screen: HomeworkStack },
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
      navigationOptions: ({navigation}) => ({
        title: 'Add Homework',
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>,
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTitleStyle: {
          color: 'white',
        },
      })
    },
  }
)

export default class App extends React.Component {
	render() {
		return <MainStack />;
	}
}