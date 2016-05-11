import './AssertShow.scss'
import React, { Component } from 'react'

import ViewList from '../../components/viewlist/ViewList'
import Header from '../../components/header/Header'

export default class AssertShow extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			viewList: []
		}
	}

	componentDidMount(){
		var _this = this
		fetch('../data/asset.json')
			.then(function(response) {
		        if (response.status >= 400) {
		            throw new Error("Bad response from server")
		        }
		        return response.json();
		    })
		    .then(function(viewList) {
		        _this.setState({
		        	viewList: viewList
		        })
		    })
	}

	handleClick(){
		alert(1);
	}

	render(){
		return (
			<div>
				<Header title='实名11认证' onClick = { this.handleClick } />
				<ViewList listData = { this.state.viewList } />
			</div>
		)
	}
}