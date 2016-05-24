import 'normalize'
import 'fontAwesome'
import './css/common'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './config/routes'

import promise from 'es6-promise'
import 'isomorphic-fetch'

promise.polyfill()

//启动热替换
if(module.hot)
    module.hot.accept()

render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById( 'testWraper' )
)

/*render(
    <Router history = { hashHistory }>
        <Route path='/' getComponents={ (nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./containers/test/Test'))
            })
          }
        }/>

        <Route path='rebate' component = { Rebate } />
        <Route path='assertshow' component = { AssertShow } />
    </Router>,
    document.getElementById( 'testWraper' )
);*/




