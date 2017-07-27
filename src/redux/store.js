import {createStore} from 'redux';
import reducer from './reducer.js';

var state={
	title:"",
	isShowChild: false,
	lunArr:[],
	nowArr:[],
	willArr:[],
	hotingArr:[],
	commingArr:[],
	detailobj:{},
	actors:[],
	cinemaArr:[]
}

var store=createStore(reducer,state);

export default store;