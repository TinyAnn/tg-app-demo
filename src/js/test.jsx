import React from 'react';
import { render } from 'react-dom';

import Header from '../components/header/Header';

render(
	<div>
		<Header title='实名认证' />
	</div>,
	document.getElementById('testWraper')
);

