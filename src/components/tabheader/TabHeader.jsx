import './TabHeader.scss'
import React, { Component } from 'react'

export default class TabHeader extends Component{

	render(){
		let liStr = this.props.tabs.map((item, index) => {
			return (
				<li 
					className = 'tabh-tab'  
					key={ index }
					onClick={ () => {
						this.props.onClick(item.name)
					} }>
					{ item.name }
				</li>
			)
		})
		
		return(
			<ul className = 'tabh-wraper'>{ liStr }</ul>
		)
	}
}

