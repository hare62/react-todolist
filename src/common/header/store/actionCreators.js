import * as constants from './constants';

import { fromJS } from 'immutable';
// 为了让 changeList data的普通对象 转变成immutable对象需要引入immutable
import axios from 'axios';

const changeList = (data) => ({
	// axios4.action中的type也得是常量文件
	type: constants.CHANGE_LIST,
	// axios3.派发dispatch(action)中的action也得是immutable对象
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});


// 字符串要用常量去替换掉 用字符串去写很容易出错，并且不会报错，很不容易排查出错误
// 因此又新建出一个常量文件-constants.js
export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

export const getList = () => {
	// axios1.retrun function because ues redux-thunk
	return (dispatch) => {
		//allow receive dispatch constants
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			// axios2.派发dispatch(action)
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};