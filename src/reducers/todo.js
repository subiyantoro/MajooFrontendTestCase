import { GET_INIT_DATA_TODO, LOADING, ERROR, DELETE_TODO, ADD_TODO, UPDATE_TODO, UPDATE_UNDONE_TODO, UPDATE_DONE_TODO, ACTION_DONE_TODO, ACTION_UNDONE_TODO } from "../configs/types"

const initState = {
    doneData: [],
    undoneData: [],
    loading: false,
    error: false
}

export default (state = initState, action ={}) => {
    switch(action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }
        }
        case GET_INIT_DATA_TODO: {
            return {
                ...state,
                doneData: action.payload.done,
                undoneData: action.payload.undone,
                loading: false
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                undoneData: [...state.undoneData.slice(0, action.payload),...state.undoneData.splice(action.payload + 1)]
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                undoneData: action.payload.concat(state.undoneData)
            }
        }
        case UPDATE_UNDONE_TODO: {
            return {
                ...state,
                undoneData: state.undoneData.map(todo => (todo.id === action.payload.id) ? action.payload : todo)
            }
        }
        case UPDATE_DONE_TODO: {
            return {
                ...state,
                doneData: state.doneData.map(todo => (todo.id === action.payload.id) ? action.payload : todo)
            }
        }
        case ACTION_DONE_TODO: {
            return {
                ...state,
                doneData: action.payload.data.concat(state.doneData),
                undoneData: [...state.undoneData.slice(0, action.payload.index),...state.undoneData.splice(action.payload.index + 1)]
            }
        }
        case ACTION_UNDONE_TODO: {
            return {
                ...state,
                undoneData: action.payload.data.concat(state.undoneData),
                doneData: [...state.doneData.slice(0, action.payload.index),...state.doneData.splice(action.payload.index + 1)]
            }
        }
        default: {
            return state
        }
    }
}