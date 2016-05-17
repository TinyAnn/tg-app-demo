import './AssertShow.scss'
import React, { Component } from 'react'

import ViewList from '../../components/viewlist/ViewList'
import Header from '../../components/header/Header'
import TabHeader from '../../components/tabheader/TabHeader'

export default class AssertShow extends Component{
	constructor(props){
		super(props)
		this.tabClickHandler = this.tabClickHandler.bind(this)
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

	gobackHandler(){
		window.location.hash='/rebate'
	}


	tabClickHandler(name){
		if(name === 'tab1'){
			fetch('../data/asset.json')
				.then((response) => {
			        if (response.status >= 400) {
			            throw new Error("Bad response from server")
			        }
			        return response.json();
			    })
			    .then((viewList) => {
			        this.setState({
			        	viewList: viewList
			        })
			    })
		} else {
			fetch('../data/asset2.json')
				.then((response) => {
			        if (response.status >= 400) {
			            throw new Error("Bad response from server")
			        }
			        return response.json();
			    })
			    .then((viewList) => {
			        this.setState({
			        	viewList: viewList
			        })
			    })
		}
	}

	render(){
		let tabs = [{
				name:'tab1'
			},{
				name:'tab2' 
			}];

		return (
			<div>
				<Header title='资产展示' onClick = { this.gobackHandler } />
				<TabHeader tabs={ tabs } onClick={ this.tabClickHandler }/>
				<ViewList listData = { this.state.viewList } />
			</div>
		)
	}
}