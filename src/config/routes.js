export default [{
	    path: '/',
	    getComponent: (nextState, cb) => {
	        return require.ensure([], (require) => {
	            cb(null, require('../containers/test/Test').default)
	        })
	    }
	},{
		path: '/rebate',
	    getComponent: (nextState, cb) => {
	        return require.ensure([], (require) => {
	            cb(null, require('../containers/rebate/Rebate').default)
	        })
	    }
	},{
		path: '/assertShow',
	    getComponent: (nextState, cb) => {
	        return require.ensure([], (require) => {
	            cb(null, require('../containers/assertShow/AssertShow').default)
	        })
	    }
	}
]
