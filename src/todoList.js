import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodolistUI from './TodoListUI';
import { CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state)
    this.handlerChangeInputValue = this.handlerChangeInputValue.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDeleteDotoItem = this.handleDeleteDotoItem.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() {

    return (
       <TodolistUI
       inputValue={this.state.inputValue}
       list={this.state.list}
       handlerChangeInputValue={this.handlerChangeInputValue}
       handleButtonClick={this.handleButtonClick}
       handleDeleteDotoItem={this.handleDeleteDotoItem}
       />
    )
  }

  handlerChangeInputValue(e) {
    console.log(e.target.value)
    const action ={
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
  
  handleButtonClick() {
    const action = {
      type: CHANGE_TODO_ITEM,
    }
    store.dispatch(action);
  }

  handleDeleteDotoItem(index) {

    console.log("shangchu",index)
    const action = {
      type: DELETE_TODO_ITEM,
      item:index
    }
    store.dispatch(action);
  }




}
export default TodoList;
