import React from 'react'
import { DrawerNavigator, StackNavigator} from 'react-navigation';
import Profile from './Profile';
import DrawerContainer from './DrawerContainer'
import Homework from './homeworks/homework-view'
import Exam from './exams/exam-view'
import Add from './add-component/add'
import Detail from './detail/'

const HomeworkStack = StackNavigator({
  screen: Homework
})
const ProfileStack = StackNavigator({
  screen: Profile
})
const ExamStack = StackNavigator({
  screen: Exam
})
export const theDrawer = DrawerNavigator({
  Homework: { screen: HomeworkStack },
  Exam: { screen: ExamStack }, 
  Profile: { screen: ProfileStack },
}, {
  contentComponent: DrawerContainer
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
      screen: Add,
      navigationOptions: {
        header:null
      }
    },
    Detail: {
      screen: Detail,
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