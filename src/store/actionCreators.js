import { CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM ,INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes';

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

export const initListAction = (value) =>({
    type: INIT_LIST_ACTION,
    data:value
    
})

export const getListDataAction = () => ({
    type: GET_INIT_LIST,
})


// export const getListDataAction = () => {
//     return ((dispatch) =>{
//         axios.get('/list.json').then((res) => {
//             var action = initListAction(res.data);
//             dispatch(action);
//         }).catch((err) => {
//             alert(err)
//         })
//     })
// }