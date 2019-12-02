import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';
import { 
         Header, 
         Wrapper, 
         Logo, 
         NavItem, 
         SearchInput, 
         Addtion, 
         Button, 
         SearchWrapper } from './styled'
// import { Button } from 'antd';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }

    this.handleOnFouce = this.handleOnFouce.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

  }

  render() {
    return (<div>
      <Header>
        <Logo></Logo>
        <Wrapper>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <SearchWrapper>
            <SearchInput placeholder="搜索" onFocus={this.handleOnFouce}  onBlur={this.handleBlur} className={this.state.focused ? 'focused':''}>
            </SearchInput>
            <i className='iconfont search'>&#xe62d;</i>
          </SearchWrapper>
          <NavItem className='right'> 登录</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <Addtion>
            <Button>注册</Button>
            <Button className='article'><i className='iconfont'>&#xe624;</i>写文章</Button>
          </Addtion>
        </Wrapper>
      </Header>
    </div>)

  }

  handleOnFouce() {
    this.setState(() => {
      return{
        focused: true
      }
    })
  }

  handleBlur() {
    this.setState(() =>{
      return {
        focused: false
      }
    })
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInput(e) {
      const action = {
        type: 'change_input_value',
        inputValue: e.target.value
      }
      dispatch(action);
    },
    handleAddListData() {
      const action = {
        type: 'add_list_data',
      }
      dispatch(action);
    },
    handleDeleteItem(index) {
      console.log('index', index)
      const action = {
        type: 'delete_item_list',
        index,
      }
      dispatch(action);
    }
  }
}
export default connect(

  mapStateToProps,
  mapDispatchToProps
)(TodoList)
