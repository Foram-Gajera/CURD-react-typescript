import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { initialStateType } from "../../interfaces/initialState.interface";
import * as actionTypes from "../types";

export const apiUrl = "https://user-saga-default-rtdb.firebaseio.com/";

function getApi() {
    return axios.get(apiUrl + "users.json").then((res) => {
      // debugger;
      let users = [];
      for (const key in res.data) {
        debugger
        users.push({ id: key, ...res.data[key] });
      }
      return users;
    });
}

export function* fetchUsers(action: actionTypes.GetUserTypes ) {
    try{
        // let users;
        // axios.get(apiUrl+'/users.json').then(res=>{
        //     users=[];
        //     for(let key in res.data){
        //         users.push({
        //             id: key, ...res.data[key]
        //         })
        //     }
        //     debugger
        // })
        const users = yield call(getApi)
        yield put({type: 'GET_USERS_SUCCESS', users: users});
    }
    catch(e){
        yield put({type: 'GET_USERS_FAILED', error: e.message});
    }
}

function* deleteUser(action: actionTypes.DeleteUserTypes) {
    try {
      const userId = action.payload;
      console.log("delete try", action.payload);
      let data;
      yield axios
        .delete(apiUrl + `users/${userId}.json`)
        .then((res) => {
          // debugger;
          alert("record deleted successfully!");
          console.log("deleted successfully!");
        })
        .catch((err) => console.log(err));
      yield put({ type: "DELETE_USER_SUCCESS", payload: userId });
    } catch (e) {
      console.log("delete catch");
      yield put({ type: "DELETE_USER_FAILED", payload: e.message });
    }
  }

function* addUser(action: actionTypes.AddUserTypes){
    const user = action.payload;
    try{
        axios.post(apiUrl+"users.json", user).then(res=>{
            console.log(res);
            alert('Record is added successfully!')
        }).catch(err=>console.log(err));
        yield put({type: "ADD_USER_SUCCESS", payload: user})

    }catch(e){
        console.log(e);
        yield put({type: "ADD_USER_FAILED", payload: e.message})

    }
}

function* updateUser(action: actionTypes.UpdateUserTypes){
  const user = action.payload;
  // try{
  //     axios.put(apiUrl+`users/${user.id}.json`, user).then(res=>{
  //         console.log(res);
  //         alert('Record is added successfully!')
  //     }).catch(err=>console.log(err));
  //     yield put({type: "ADD_USER_SUCCESS", payload: user})

  // }catch(e){
  //     console.log(e);
  //     yield put({type: "ADD_USER_FAILED", payload: e.message})

  // }
}

export function* userSaga (){
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export function* deleteSaga() {
    yield takeLatest("DELETE_USER_REQUESTED", deleteUser);
  }

  export function* addSaga() {
    yield takeLatest("ADD_USER_REQUESTED", addUser);
  }

  export function* updateSaga() {
    yield takeLatest("UPDATE_USER_REQUESTED", updateUser);
  }