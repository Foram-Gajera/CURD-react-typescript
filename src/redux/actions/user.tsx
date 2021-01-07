import User from '../../interfaces/user.interface';
import * as actionTypes from '../types';

export function getUsers(): actionTypes.ActionTypes {
    return {
        type: actionTypes.GET_USERS_REQUESTED,
    }
}

export function deleteUser(id: string): actionTypes.ActionTypes {
    return {
        type: actionTypes.DELETE_USER_REQUESTED,
        payload: id
    }
}

export function addUser(user: User): actionTypes.ActionTypes {
    return {
        type: actionTypes.ADD_USER_REQUESTED,
        payload: user
    }
}

export function updateUser(user: User): actionTypes.ActionTypes {
    return {
        type: actionTypes.UPDATE_USER_REQUESTED,
        payload: user
    }
}