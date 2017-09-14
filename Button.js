import React, { Component } from 'react';
import './Button.css'

class Button extends Component{
	
	Click(){
        	

    	}

	render() {
		return (
			<div className='Button'>
				<div className='ButtonTextOne'>{this.props.leftText}</div>
				<div className='ButtonTextTwo'>{this.props.rightText}</div>
				<div className={this.props.innerClass} onClick={this.props.Click}></div>
			
			</div>
		)	
	}
};

export default Button;

