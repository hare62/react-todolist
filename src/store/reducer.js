
const defaultState = {
    inputValue :'',
    list:[],
    focused: false,
}

export default (state = defaultState , action) => {
   if(action.type === 'change_input_value'){
       const newState = JSON.parse(JSON.stringify(state));
       newState.inputValue = action.inputValue;
       return newState;
   }

   if(action.type === 'add_list_data'){
       const newState = JSON.parse(JSON.stringify(state));
       newState.list.push(state.inputValue);
       newState.inputValue = '';
       return newState;
   }

   if(action.type === 'delete_item_list'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    console.log(newState)
    return newState;
}

if(action.type === 'is_focused'){
    console.log("is_focused",action)
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    console.log(newState)
    return newState;
}

//is_Blur

if(action.type === 'is_Blur'){
    console.log("is_Blur",action)
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = action.value;
    console.log(newState)
    return newState;
}
   
   return state;
}