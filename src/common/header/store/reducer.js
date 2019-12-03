// 加个命名header 相当于命名空间，防止取重复的变量名称
// 字符串要用常量去替换掉 用字符串去写很容易出错，并且不会报错，很不容易排查出错误
// 因此又新建出一个常量文件-constants.js
// 将常量导出
// reducer要取接收action 因此要把constants这个文件导入

import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable.js就是一个库 facebook历时三年开发的一个库
// immutable对象 不可更改对象
// yarn add immutable


//通过fromJS将对象封装成immutable对象
const defaultState = fromJS({
	focused: false,
	// mouseIn 代表鼠标是否移入
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	// 在向store中return数据的时候,需要用到immutable里面的set方法
	// immutable对象的set方法，会结合之前immutable对象的值 
	// 和设置的值，返回一个全新的对象
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
			
		case constants.CHANGE_LIST:

			return state.merge({
				// axios6.返回新的state 这里合并了 此刻list,action.data都是immutable对象 
				list: action.data,
				totalPage: action.totalPage
			});
		//  鼠标进入reducer mouseIn  true
		case constants.MOUSE_ENTER: 
			return state.set('mouseIn', true);
		//  鼠标移出reducer mouseIn false  
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}