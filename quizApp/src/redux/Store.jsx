// here we are creating a central store for the react application
import {configureStore} from  '@reduxjs/toolkit'
import { combineReducers } from 'redux';
// ... rest of your code

// calling the reducers from questionReducer.jsx
import QuestionReducer from './QuestionReducer'
import ResultReducer from './ResultReducer'
const rootReducer = combineReducers({
    questions: QuestionReducer,
    result: ResultReducer
})
// create a store with reducer function
 export default configureStore({reducer: rootReducer})