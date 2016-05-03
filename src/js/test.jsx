import React from 'react';
import { render } from 'react-dom';

import Header from '../components/header/Header';

//启动热替换
if(module.hot)
    module.hot.accept();

render(
	<div>
		<Header title='实名认证' />
	</div>,
	document.getElementById('testWraper')
);

