import React from 'react'
import *  as actionTypes from '../types';
import User from '../../interfaces/user.interface';
import { initialStateType } from '../../interfaces/initialState.interface';

// const user: User[] = [];


const initialState: initialStateType = {
    users: [],
    loading: false,
    error: ''
}

const users = (state= initialState, action: actionTypes.ActionTypes): initialStateType => {
    switch(action.type){
        case actionTypes.GET_USERS_REQUESTED:
            return {
              ...state,
              loading: true,
            };
      
          case actionTypes.GET_USERS_SUCCESS:
            return {
              ...state,
              loading: false,
              users: action.users,
            };
      
          case actionTypes.GET_USERS_FAILED:
            return {
              ...state,
              loading: false,
              error: action.error,
            };

            
    case actionTypes.DELETE_USER_REQUESTED:
        return {
          ...state,
          loading: true,
        };
  
      case actionTypes.DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: state.users.filter((user) => user.id !== action.payload),
        };
  
      case actionTypes.DELETE_USER_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };


        case actionTypes.ADD_USER_REQUESTED:
            return {
              ...state,
              loading: true,
            };
      
          case actionTypes.ADD_USER_SUCCESS:
            return {
              ...state,
              loading: false,
              users: [...state.users, action.payload],
            };
      
          case actionTypes.ADD_USER_FAILED:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };

            case actionTypes.UPDATE_USER_REQUESTED:
              return {
                ...state,
                loading: true,
              };
        
            case actionTypes.UPDATE_USER_SUCCESS:
              return {
                ...state,
                loading: false,
                // users: [...state.users, action.payload],
              };
        
            case actionTypes.UPDATE_USER_FAILED:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };
      
            default:
                return state;
    }
}

export default users
