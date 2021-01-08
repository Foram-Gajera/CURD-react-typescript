import { type } from 'os';
import User from '../interfaces/user.interface';

export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const DELETE_USER_REQUESTED = "DELETE_USER_REQUESTED";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILED = "DELETE_USER_FAILED";

export const ADD_USER_REQUESTED = "ADD_USER_REQUESTED";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_FAILED";

export const UPDATE_USER_REQUESTED = "UPDATE_USER_REQUESTED";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";


interface GetUsers{
    type: typeof GET_USERS_REQUESTED,
}

interface GetUsersSuccess{
    type: typeof GET_USERS_SUCCESS,
    users: User[]
}

interface GetUsersFailed{
    type: typeof GET_USERS_FAILED,
    error: string
}

export type GetUserTypes = GetUsers | GetUsersSuccess | GetUsersFailed;


interface DeleteUser{
    type: typeof DELETE_USER_REQUESTED,
    payload: string
}

interface DeleteUserSuccess{
    type: typeof DELETE_USER_SUCCESS,
    payload: string
    // users: User[]
}

interface DeleteUserFailed{
    type: typeof DELETE_USER_FAILED,
    payload: string
}

export type DeleteUserTypes = DeleteUser | DeleteUserSuccess | DeleteUserFailed;


interface AddUser{
    type: typeof ADD_USER_REQUESTED,
    payload: User
}

interface AddUserSuccess{
    type: typeof ADD_USER_SUCCESS,
    payload: User
}

interface AddUserFailed{
    type: typeof ADD_USER_FAILED,
    payload: string
}

export type AddUserTypes = AddUser | AddUserSuccess | AddUserFailed;

interface UpdateUser{
    type: typeof UPDATE_USER_REQUESTED,
    payload: User
}

interface UpdateUserSuccess{
    type: typeof UPDATE_USER_SUCCESS,
    payload: User
    userId: any
}

interface UpdateUserFailed{
    type: typeof UPDATE_USER_FAILED,
    payload: string
}

export type UpdateUserTypes = UpdateUser | UpdateUserSuccess | UpdateUserFailed;

export type ActionTypes = DeleteUserTypes | GetUserTypes | AddUserTypes | UpdateUserTypes;
