//this is basically where we will store the results of the user in an array.

import{ createSlice} from '@reduxjs/toolkit'
export const ResultReducer= createSlice({
  name:'result',
  initialState: {
userId: null,
result:[]
  },
  reducers: {
    setUserId: (state,action)=>{
      state.userId= action.payload
    },
    pushResultAction: (state,action)=>{
      state.result.push(action.payload)//will append the answer that the user will choose from the options provided.
    },
    updateResultAction: (state,action)=>{
      const {trace,checked}= action.payload
      state.result.fill(checked,trace, trace + 1)//this fill method changes all array elements from start to end index to a static value and returns the modified array
    }
  }
} )
export const {setUserId,pushResultAction,updateResultAction}= ResultReducer.actions
export default ResultReducer.reducer