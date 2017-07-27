import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/App.css';
import './hotcss/hotcss.js';
import './css/icon.css';
import App from './App';

import {Provider} from 'react-redux';
import store from './redux/store.js';

import registerServiceWorker from './registerServiceWorker';
function render(){
	ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>,
		document.getElementById('root'));
}
render();

store.subscribe(render);

registerServiceWorker();
