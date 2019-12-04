import { fromJS } from 'immutable';
import * as constants from './constants';
// immutable 的登录状态值
const defaultState = fromJS({
	login: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		// 登录状态
		case constants.CHANGE_LOGIN:
			return state.set('login', action.value);
	    // 退出登录状态
		case constants.LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
	}
}