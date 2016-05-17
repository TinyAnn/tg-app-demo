import React,{ Component } from 'react'

import TabHeader from '../../components/tabheader/TabHeader'

export default class Test extends Component{
	render(){
		let tabs = [{
				name:'tab1'
			},{
				name:'tab2' 
			}];

		return (
			<div>
				<TabHeader tabs={ tabs }/>
			</div>
		)
	}
}