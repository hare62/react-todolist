
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getListDataAction() {
   try {
      const res = yield axios.get('/list.json');
      const action = initListAction(res.data);
      yield put(action)
   } catch (e) {
     
   }
}

function* mySaga() {
    yield takeLatest(GET_INIT_LIST, getListDataAction);
  }
  
  export default mySaga;