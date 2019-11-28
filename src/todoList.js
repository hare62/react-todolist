import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodolistUI from './TodoListUI';
import axios from 'axios';
import { initListAction, changeInputValue, changeTodoItemAction, deleteTodoItemActon } from './store/actionCreators';

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

  componentDidMount() {
    // action只能是一个对象

   
   
    axios.get("/list.json").then((res) => {
      const action = initListAction(res.data)
      store.dispatch(action)
    }).catch(() => {
      alert("error")
    })
  }

  handlerChangeInputValue(e) {

    const value = e.target.value
    const action = changeInputValue(value)
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
  
  handleButtonClick() {

    const action = changeTodoItemAction()
    store.dispatch(action);
  }

  handleDeleteDotoItem(index) {

    const action = deleteTodoItemActon(index)
    store.dispatch(action);
  }




}
export default TodoList;
