import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import ViewList from '../src/components/viewlist/ViewList'

describe('展示数据列表',function(){
	it('列表信息展示',function(){
		const listJson = [{
			    "name": "邻居在售",
			    "price": "430-1300万元/套",
			    "description": "同小区售价",
			    "count": "54",
			    "type": "2"
			}, {
			    "name": "邻居在租",
			    "price": "2500-15000元/月",
			    "description": "同小区租金",
			    "count": "9",
			    "type": "1"
			}]

		let viewList = mount(<ViewList listData={ listJson }/>)
		expect(viewList.find('li').length).to.equal(2)
	})
})