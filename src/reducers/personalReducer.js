import personalService from '../services/personalService'

const personalReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.array.filter(obj => obj.user === action.userId)
        case 'CLEAR':
            return action.data
        case 'ADD':
            return state.concat(action.data)
        case 'REMOVE':
            const newState = state.filter(obj => obj.id !== action.data)
            return newState
        case 'MODIFIED':
            const modifiedArr = [...state].map(obj => obj.id === action.data.id ? action.data : obj)
            return modifiedArr
        default:
            return state
    }
}

export const initialPersonalPlan = (array, userId) => {
    return {
        type: 'INIT',
        array,
        userId
    }
}

export const logoutClear = () => {
    return {
        type: 'CLEAR',
        data: []
    }
}

export const addExpense = values => {
    return async dispatch => {
        const expense = await personalService.addExpense(values)
        console.log(expense)
        dispatch({
            type: 'ADD',
            data: expense
        })
    }
}

export const removeExpense = id => {
    return async dispatch => {
        const removed = await personalService.removeExpense(id) // eslint-disable-line
        dispatch({
            type: 'REMOVE',
            data: id
        })
    }
}

export const modifyExpense = (id, newExpense) => {
    return async dispatch => {
        const modified = await personalService.modifyExpense(id, newExpense)
        dispatch({
            type: 'MODIFIED',
            data: modified
        })
    }
}

export default personalReducer