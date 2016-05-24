import './Calendar.scss'
import 'fontAwesome'

import React, { Component } from 'react'

export default class Calendar extends Component{
	render(){
		return (
			<div className='cld-wraper'>
				<header className = 'cld-header'>
					<i className='fa fa-angle-left'></i>
					<span id="cld-year">2016</span>年
					<span id="cld-month">05</span>月
					<i className='fa fa-angle-right'></i>
				</header>
			</div>
		)
	}
}

