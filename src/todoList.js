import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GlobalStyle, Header, Logo } from './styled'

class TodoList extends Component {
 
  render() {
    return (<div>
              <GlobalStyle>
              </GlobalStyle>
              <Header>
                   <Logo></Logo>
              </Header>
          </div>)

  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    inputValue: state.inputValue,
    list:state.list
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
      console.log('index',index)
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
