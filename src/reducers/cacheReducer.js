const cacheReducer = (state = null, action) => {

    switch (action.type) {
        case 'SET':
            return action.data
        case 'CLEAR':
            return action.data
        default:
            return state
    }

}

export const setCache = obj => {
    return {
        type: 'SET',
        data: obj
    }
}

export const clearCache = () => {
    return {
        type: 'CLEAR',
        data: null
    }
}

export default cacheReducer