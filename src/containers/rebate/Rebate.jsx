import './Rebate.scss'

import React, { Component } from 'react'
import Calendar from 'components/calendar/Calendar'
import Header from 'components/header/Header'
import Barchart from 'components/barchart/Barchart'

export default class Rebate extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		window.location.hash='/'
	}

	render(){
		return (
			<div>
				<Header title='代收返佣' onClick = { this.handleClick }/>
				<Calendar />
				<Barchart />
			</div>
		)
	}
}