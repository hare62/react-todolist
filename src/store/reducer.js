import { combineReducers } from 'redux-immutable';
// 在映射数据的时候
// 因为加入了immutable所以需要用get这个方法去获取数据
// focused: state.header.get('focused')
// state是个对象 而state.header是个immutable对象 数据不统一
// 我们想把state这个对象直接改成immutable对象，那么就需要在主store下边的reducer.js的state封装成immutable对象
// 又需要去依赖 redux-immutable
// yarn add redux-immutable
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
