import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodolistUI from './TodoListUI';
import { changeInputValue, changeTodoItemAction, deleteTodoItemActon ,getListDataAction } from './store/actionCreators';

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

    const action = getListDataAction();
    store.dispatch(action);

    // axios.get('/list.json').then((res) => {
    //   var action = initListAction(res.data);
    //   store.dispatch(action);
    // }).catch((err) => {
    //   alert(err)
    // })

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
