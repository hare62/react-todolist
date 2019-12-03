// 加个命名header 相当于命名空间，防止取重复的变量名称
// 字符串要用常量去替换掉 用字符串去写很容易出错，并且不会报错，很不容易排查出错误
// 因此又新建出一个常量文件-constants.js
// 将常量导出
// reducer要取接收action 因此要把constants这个文件导入

import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}