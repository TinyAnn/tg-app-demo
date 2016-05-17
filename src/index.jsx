import 'normalize'
import './css/common'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

import AssertShow from './containers/assertshow/AssertShow'
import Rebate from './containers/rebate/Rebate'
import Test from './containers/test/Test'

import promise from 'es6-promise'
import 'isomorphic-fetch'

promise.polyfill();

//启动热替换
if(module.hot)
    module.hot.accept();

render(
    <Router history = { hashHistory }>
        <Route path='/' component = { Test } />
        <Route path='/rebate' component = { Rebate } />
        <Route path='/assertshow' component = { AssertShow } />
    </Router>,
    document.getElementById( 'testWraper' )
);




