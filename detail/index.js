import React from 'react'
import {View} from 'react-native'
import {Header} from 'react-native-elements'
import HomeworkDetail from './homework'
import ExamDetail from './exam'

export default class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: 'orange', title: 'Homework'}
  }

  renderView(){
    const viewType = this.props.navigation.getParam('viewType');
    const item = this.props.navigation.getParam('item')
    if(viewType === 'homework'){
      return <HomeworkDetail navigation={this.props.navigation} item={item}/>
    }else{
      this.setState({backgroundColor: 'green', title: 'Exam'})
      return <ExamDetail navigation={this.props.navigation} item={item}/>
    }
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Header backgroundColor={this.state.color}
          centerComponent={{ text: this.state.title, style: { color: '#fff', fontSize:20 }}}
          leftComponent={{ icon: 'chevron-left', color: '#fff',
           onPress: () => {
              this.props.navigation.goBack(null)
            },
          underlayColor: this.state.color}}/>
          <View style={{flex:1}}>
            {this.renderView()}
          </View>
        </View>
      )
  }

}
 
