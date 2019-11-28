import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';


class TodolistUI extends Component {
    render() {
        return (
            <div>
                <Input value={this.props.inputValue} placeholder="Todo List" onChange={this.props.handlerChangeInputValue} style={{ width: '300px', marginRight: '20px', marginTop: '20px', marginLeft: '10px' }} />
                <Button type="primary" onClick={this.props.handleButtonClick}>Primary</Button>
                <List
                    style={{ marginLeft: '10px', marginTop: '10px', width: '300px' }}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => { this.props.handleDeleteDotoItem(index)}}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodolistUI;