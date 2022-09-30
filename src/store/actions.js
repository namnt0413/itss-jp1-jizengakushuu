import { SET_TODO_INPUT, ADD_TODO, COMPLETE_TODO, EDIT_TODO, SET_UPDATE_INPUT, UPDATE_TODO, REMOVE_TODO } from "./constants";

export const setToDoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const completeTodo = payload => ({
    type: COMPLETE_TODO,
    payload
})

export const editTodo = payload => ({
    type: EDIT_TODO,
    payload
})

export const setUpdateInput = payload => ({
    type: SET_UPDATE_INPUT,
    payload
})

export const updateTodo = payload => ({
    type: UPDATE_TODO,
    payload
})

export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
})