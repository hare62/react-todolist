import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

// reducer目录路劲比较长，所以在store下新建一个index.js文件直接找到这个index.js在这个文件中导出该模块的reducer.[个人感觉意义不大，有种画蛇添足的感觉]
// combineReducers把多个reducer连接在一起，各个组件的数据单独放在一起 然后聚合起来需要用到combineReducers来连接
// 把一个大的reducer拆分成多个reducer 最后通过combineReducers整合起来。
const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer
});

export default reducer;
