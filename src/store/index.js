// store main page
// need applyMiddleware regist thunk
import { createStore, compose, applyMiddleware } from 'redux';
// 中间件就是指的是action和dispatch
// 其实就是 dispach的升级
// 在创建store的时候使用
// 运用 redux-thunk 可以在dispatch(action) 里面写函数 就不单单是js对象
import thunk from 'redux-thunk';
// yarn add redux-thunk
import reducer from './reducer';

// gitHub  redux-devtools-extension 方便在浏览器调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	// need applyMiddleware regist thunk
	applyMiddleware(thunk)
));

export default store;