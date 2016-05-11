import './Header.scss';
import React, { Component } from 'react';

export default class AppHeader extends Component{
	render(){
		return(
			<header className="header">
				<i className="goBackIcon icons" onClick = { this.props.onClick }></i>
				{this.props.title}
			</header>
		)
	}
}

