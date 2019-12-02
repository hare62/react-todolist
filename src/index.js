import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList';
import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement
)

