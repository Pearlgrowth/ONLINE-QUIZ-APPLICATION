import {createSlice} from '@reduxjs/toolkit'
//  the create slice creates a reducer with the initial value
export const QuestionReducer= createSlice({
name: 'questions',
initialState:{
    queue: [],
    answers: [],
    trace:0// trace is responsible for increasing the value by one when you click next as well as reducing when you click the previous questions
},
reducers: {
    startQuizAction:(state,action)=>{
       let [question,answers]= action.payload 
return{
    ...state,
    queue: question,
    answers
}
    },
    moveNextAction: (state)=>{
return{
    ...state,
    trace: state.trace + 1
}
    },
    movePreviousAction:(state)=>{
        return{
            ...state,
            trace: state.trace - 1
        }
    },
    resetAllAction: ()=>{
        return{
            queue: [],
            answers: [],
            trace: 0
        }
        
    }

}
})
// queue: has all the questions from the database
// answers will store all answers
// trace will track the user questions and is increased and decreased by one when the user clicks next and previously respectively.
export const {startQuizAction, moveNextAction,movePreviousAction,resetAllAction} = QuestionReducer.actions
export default QuestionReducer.reducer