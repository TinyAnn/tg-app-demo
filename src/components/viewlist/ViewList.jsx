import './ViewList.scss';
import React, { Component } from 'react';

export default class ViewList extends Component{
	render(){
		var list = this.props.listData.map(function(item, index){
			return (
				<li key={ index } className='vl-lis'> 
					<div className = 'vl-line'> 
						<span className = 'vl-l-name'>{ item.name }</span>
						<span className = 'vl-l-price'>{ item.price }</span>
					</div>
					<div className = 'vl-line'>{ item.description }</div>
					<div className = 'vl-aside'>
						<div className = 'vl-a-line'>{ item.count } ></div>
						<div className = 'vl-a-line'>
							<a href='javascript:;' className='v-a-btn'>{ item.type === '1'?'一键出租':'一键卖房' }</a>
						</div>
					</div>
				</li>
			)
		})
		return(
			<ul className="viewList">
				{ list }
			</ul>
		)
	}
}

