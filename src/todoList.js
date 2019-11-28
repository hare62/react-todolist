import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
import store from './store';
import { CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state)
    this.handlerChangeInputValue = this.handlerChangeInputValue.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.handleDeleteDotoItem = this.handleDeleteDotoItem.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() {

    return (
      <div>
        <Input value={this.state.inputValue} placeholder="Todo List" onChange={this.handlerChangeInputValue} style={{ width: '300px', marginRight: '20px', marginTop: '20px' ,marginLeft:'10px'}} />
        <Button type="primary" onClick={this.handleButtonClick}>Primary</Button>
        <List
         
          style={{marginLeft: '10px',marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDeleteDotoItem.bind(this,index)}>
               {item}
            </List.Item>
          )}
        />
      </div>
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

  handleDeleteDotoItem(item) {
    console.log("shangchu",item)
    const action = {
      type: DELETE_TODO_ITEM,
      item:item
    }
    store.dispatch(action);
  }




}
export default TodoList;
