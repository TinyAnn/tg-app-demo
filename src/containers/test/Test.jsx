import React,{ Component } from 'react'

import { Link } from 'react-router'
import TabHeader from '../../components/tabheader/TabHeader'

export default class Test extends Component{
	render(){
		return (
			<div>
				<Link to={'/rebate'} >rebate</Link><br />
				<Link to={'/assertshow'} >assertshow</Link><br />
			</div>
		)
	}
}