import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList';
import { Provider } from 'react-redux';
import store from './store';
import './static/iconfont/iconfont.css';
import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement
)

