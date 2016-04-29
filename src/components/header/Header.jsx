import './Header.css';
import React, { Component } from 'react';

export default class AppHeader extends Component{
	constructor(props){
		super(props)
		this.goBackHandler = this.goBackHandler.bind(this)
		this.state = {
			title2: 'aaaa'
		}
	}

	goBackHandler(){
		this.setState({
			title2:'bbbb'
		});
	}

	render(){
		return(
			<header className="header">
				<i className="goBackIcon icons" onClick = { this.goBackHandler }></i>
				{this.props.title} : [{ this.state.title2 }]
			</header>
		)
	}
}

