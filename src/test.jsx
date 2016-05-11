import 'normalize'
import './css/common'

import React from 'react'
import { render } from 'react-dom'

import AssertShow from './containers/assertshow/AssertShow'
import Rebate from './containers/rebate/Rebate'

import promise from 'es6-promise'
import 'isomorphic-fetch'

promise.polyfill();

//启动热替换
if(module.hot)
    module.hot.accept();

render(
    <Rebate />,
    document.getElementById( 'testWraper' )
);



