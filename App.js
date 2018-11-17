import React from 'react'
import { DrawerNavigator } from 'react-navigation';
import Profile from './Profile';
import Homework from './homeworks/homework-view'
const MyApp = DrawerNavigator({
    Homework: {
      screen: Homework,
    },
    Profile: {
      screen: Profile,
    },
  });

export default class App extends React.Component {
	render() {
		return <MyApp />;
	}
}