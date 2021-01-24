import userReducer from './reducers/userReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import personalReducer from './reducers/personalReducer'
import filterExpensesReducer from './reducers/filterExpensesReducer'
import cacheReducer from './reducers/cacheReducer'

const reducer = combineReducers({
    user: userReducer,
    personalExpenses: personalReducer,
    filter: filterExpensesReducer,
    cache: cacheReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store