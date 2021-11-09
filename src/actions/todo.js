import { ACTION_DONE_TODO, ACTION_UNDONE_TODO, ADD_TODO, DELETE_TODO, ERROR, GET_INIT_DATA_TODO, LOADING, UPDATE_DONE_TODO, UPDATE_TODO, UPDATE_UNDONE_TODO } from "../configs/types"
import { BASE_URL } from "../configs/utils"

const sortAscDate = (a, b) => {
    var dateA = new Date(a.created_at)
    var dateB = new Date(b.created_at)
    return dateB > dateA ? 1 : -1
}

const sortDescDate = (a, b) => {
    var dateA = new Date(a.created_at)
    var dateB = new Date(b.created_at)
    return dateA > dateB ? 1 : -1
}

export const getInitData = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        fetch(BASE_URL)
            .then(res => res.json())
            .then((data) => {
                let doneList = []
                let undoneList = []
                data.forEach(element => {
                    if(element.status == 1) {
                        doneList.push(element)
                    }else{
                        undoneList.push(element)
                    }
                });
                doneList.sort(sortAscDate)
                undoneList.sort(sortDescDate)
                dispatch({
                    type: GET_INIT_DATA_TODO,
                    payload: {
                        done: doneList,
                        undone: undoneList
                    }
                })
            })
            .catch((e) => {
                dispatch({
                    type: ERROR
                })
            })
    }
}

export const removeTodoData = (index) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_TODO,
            payload: index
        })
    }
}

export const addTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: data
        })
    }
}

export const updateUndoneTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_UNDONE_TODO,
            payload: data
        })
    }
}

export const updateDoneTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_DONE_TODO,
            payload: data
        })
    }
}

export const doneActionTodo = (index, data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTION_DONE_TODO,
            payload: {
                index,
                data: [data]
            }
        })
    }
}

export const undoneActionTodo = (index, data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTION_UNDONE_TODO,
            payload: {
                index,
                data: [data]
            }
        })
    }
}