import { useState, useEffect } from 'react';
import Data,{answers} from '../database/data';
import { useDispatch } from 'react-redux';//useDispatch is inaccessible inside a function.
import * as Action from '../redux/QuestionReducer';
// import {moveNextAction} from '../redux/QuestionReducer'
export const useFetchQuestions = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData(prevGetData => ({ ...prevGetData, isLoading: true }));

    const fetchData = async () => {
      try {
        const questions = await Data;
        if (questions.length > 0) {
          setGetData(prevGetData => ({ ...prevGetData, isLoading: false }));
          setGetData(prevGetData => ({ ...prevGetData, apiData:[questions,answers]}));
          dispatch(Action.startQuizAction([questions, answers]));
        } else {
          throw new Error('No questions are available');
        }
      } catch (error) {
        setGetData(prevGetData => ({ ...prevGetData, isLoading: false }));
        setGetData(prevGetData => ({ ...prevGetData, serverError: error }));
      }
    };

    fetchData();
  }, [dispatch]);

  return [getData]; // Return only the getData state object
};
// we are calling the moveaction function which increases the trace value by one
export const MoveNextQuestion = () => async (dispatch) => {
  try {
      dispatch(Action.moveNextAction());
  } catch (error) {
      console.log(error);
  }
};
//this is the previous dispatch action which reduces the trace value by one.
export const MovePreviousQuestion = () => async (dispatch) => {
  try {
      dispatch(Action.movePreviousAction());
  } catch (error) {
      console.log(error);
  }
};