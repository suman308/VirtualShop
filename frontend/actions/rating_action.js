import * as AllUtil from '../utils/comments'
import { receiveErrors } from './product_actions';

export const RECEIVE_ALL_RATINGS = 'RECEIVE_ALL_RATINGS';
export const RECEIVE_RATING = 'RECEIVE_RATING';
export const UPDATE_RATING = 'UPDATE_RATING';
export const REMOVE_RATING = 'REMOVE_RATING';
export const REMOVE_RATING = 'REMOVE_RATING';
export const RECEIVE_RATING = 'RECEIVE_RATING ';
export const CLEAR_RATINGS = "CLEAR_RATINGS";

export const receiveRatings = (ratings) => {
    return {
        type: RECEIVE_ALL_RATINGS,
        ratings
    }
}

export const receiveRating = (rating) => {
    return {
        type: RECEIVE_RATING,
        rating
    }
}

export const removeRating = (ratingId) => {
    return {
        type: REMOVE_RATING,
        ratingId
    }
}
export const clearComments = () => {
    return {
        type: CLEAR_COMMENTS

    }
}

export const getComments = (product_id) => dispatch => {
    return AllUtil.getAllComments(product_id)
        .then(comments => dispatch(receiveComments(comments)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getComment = (commentId) => dispatch => {
    return AllUtil.getComment(commentId)
        .then(comment => dispatch(receiveComment(comment)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateComment = (comment) => dispatch => {
    return AllUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)), errors => dispatch(recieveErrors(errors.responseJSON)))
}

export const deleteComment = (commentId) => dispatch => {
    return AllUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const createComment = (comment) => dispatch => {
    return AllUtil.createComment(comment)
        .then((comment) => dispatch(receiveComment(comment)), errors => dispatch(receiveErrors(errors.responseJSON)))
}