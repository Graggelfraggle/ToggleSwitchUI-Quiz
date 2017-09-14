import React, { Component } from 'react';
import './App.css';
import Button from './Button'
import './Button.css'

class App extends Component {

  constructor(){
    super();
      this.state ={
        oneclicked:0,
        twoclicked:0,
        threeclicked:0,
        oneButton:'InnerButton',
        twoButton:'InnerButton',
        threeButton:'InnerButton',
        answerproximity:0,
        container:'Container-0',
        answer:'The answer is incorrect',
      };
  }
 
  oneClick(){
    if (this.state.oneclicked===0){
      this.setState({oneClicked:1,oneButton:'InnerRight'});
    }
    if (this.state.answerproximity===0){
      this.setState({answerproximity:1,container:'Container-1'});
    } else if (this.state.answerproximity===1){
      this.setState({answerproximity:2,container:'Container-2'});
    }else if (this.state.answerproximity===2){
      this.setState({answerproximity:3,container:'Container-3',answer:'The answer is correct'});
    }
  }
  twoClick(){
    if (this.state.twoclicked===0){
      this.setState({twoClicked:1,twoButton:'InnerRight'});
    }
    if (this.state.answerproximity===0){
      this.setState({answerproximity:1,container:'Container-1'});
    }else if (this.state.answerproximity===1){
      this.setState({answerproximity:2,container:'Container-2'});
    }else if (this.state.answerproximity===2){
      this.setState({answerproximity:3,container:'Container-3',answer:'The answer is correct'});
    }
  }
  threeClick(){
    if (this.state.threeclicked===0){
      this.setState({threeClicked:1,threeButton:'InnerRight'});
    }
    if (this.state.answerproximity===0){
      this.setState({answerproximity:1,container:'Container-1'});
    } else if (this.state.answerproximity===1){
      this.setState({answerproximity:2,container:'Container-2'});
    }else if (this.state.answerproximity===2){
      this.setState({answerproximity:3,container:'Container-3',answer:'The answer is correct'});
    }
  }
  render() {

    return (
      <div className={this.state.container}>        
        <div className='Question'>
          Ideal conditions for the bacterial growth
        </div>
          <div className='ButtonContainer'>
            <Button className='ButtonOne' leftText='Cold' rightText='Warm' innerClass={this.state.oneButton} Click={()=>this.oneClick()} />
            <Button className='ButtonTwo' leftText='No water' rightText='Water' innerClass={this.state.twoButton} Click={()=>this.twoClick()} />
            <Button className='ButtonThree' leftText='No food' rightText='Food' innerClass={this.state.threeButton} Click={()=>this.threeClick()} />
          </div>
        <div className="The-answer-is-incorr">
          {this.state.answer}
        </div>
        
      </div>
    );
  }
}

export default App;
