import * as AllUtil from '../utils/users'; 
export const RECIEVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'; 
export const REMOVE_USERS = 'REMOVE_USERS'; 
export const REMOVE_USER = 'REMOVE_USER'
exp
export const receiveUsers = (users)=> {
    return {
        type: RECIEVE_ALL_USERS, 
        users
    }
}

export const receiveUser = (user)=> {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const removeUser = (user)=> {
    return {
        type:
    }
}