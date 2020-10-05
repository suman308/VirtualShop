import * as AllUtil from '../utils/users'; 
import { receiveErrors } from './product_actions';
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

export const removeUser = (userId)=> {
    return {
        type: REMOVE_USER, 
        userId
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const removeErrors = () => {
    return {
        type: RECEIVE_ERRORS,

    }
}

export const getUsers = ()=> dispatch =>{
    return AllUtil.getUsers()
    .then(users=>dispatch(receiveUsers(users)), errors=> dispatch(receiveErrors(errors)))
}

export const getUser = (userId)=> dispatch=>{
    return AllUtil.getUser(userId)
    .then(user=>dispatch(receiveUser(user)), errors=> dispatch(receiveErrors(errors)))
}