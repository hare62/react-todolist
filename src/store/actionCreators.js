import { CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM ,INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios';
export const initListAction = (value) =>({
    type: INIT_LIST_ACTION,
    data:value
    
})

export const changeInputValue = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value,
  })

export const changeTodoItemAction = () =>({
    type: CHANGE_TODO_ITEM,
})

export const deleteTodoItemActon = (index) =>({
    type: DELETE_TODO_ITEM,
    item:index
})

export const getListData = () =>{
    return (dispatch) => {
        axios.get("/list.json").then((res) => {
            const action = initListAction(res.data)
            dispatch(action)
          }).catch(() => {
            alert("error")
          })
    }
}