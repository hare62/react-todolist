import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
         Header, 
         Wrapper, 
         Logo, 
         NavItem, 
         SearchInput, 
         Addtion, 
         Button, 
         SearchWrapper } from './styled'

const TodoList = (props) => {
  return (<div>
    <Header>
      <Logo></Logo>
      <Wrapper>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <SearchWrapper>
          <SearchInput placeholder="搜索" onFocus={props.handleOnFouce}  onBlur={props.handleBlur} className={props.focused ? 'focused':''}>
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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnFouce() {
      console.log("tain")
      const action = {
        type: 'is_focused',
        value: true
      }
      dispatch(action)
    },
    handleBlur() {
      const action = {
        type: 'is_Blur',
        value: false
      }
      dispatch(action)
    }
  }
}
export default connect(

  mapStateToProps,
  mapDispatchToProps
)(TodoList)
