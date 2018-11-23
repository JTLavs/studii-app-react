import React from 'react'
import AddHomework from './add-homework-view'
import AddExam from './add-exam-view'

export default class Add extends React.Component {
  constructor(props){
    super(props);
  }

  renderView(){
    const viewType = this.props.navigation.getParam('viewType');
    if(viewType === 'homework'){
      return <AddHomework navigation={this.props.navigation}/>
    }else{
      return <AddExam navigation={this.props.navigation}/>
    }
  }

  render() {
    return(this.renderView())
  }

}
 
