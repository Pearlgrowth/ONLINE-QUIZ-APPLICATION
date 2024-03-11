import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// this function will help us know the number of questions the user attempted because if the user did not answer the console shows undefined instead of an answer.
export function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}
// this function helps to calculate the user points and will also be imported in quiz.jsx and called.
export function earnMarksNumber(result, answers, points) {
  return (
    result
      .map((element, i) => answers[i] === element)
      .filter((i) => i)
      //will specifically filter only the answered questions from the user and ignore the questions not answered.
      .map((i) => points) //for each correct answer it will return the points that you will pass as a parameter value in quiz.jsx when calling the function.
      .reduce((prev, curr) => prev + curr, 0)
  ); //this will sum up all the user points..if you don't specify 0 for a second argument you get an error.
}
export function flagResult(totalMarks, earnedMarks) {
  return (totalMarks * 50) / 100 < earnedMarks; // this is where we are determining if the user passed or failed the exam
}
//check the username to make sure it is provided before starting the quiz,restricted routes.

// this function is to be replaced by login and signup page using auths and passports
export function checkUserExist({ children }) {
  const userId = useSelector((state) => state.auth.userId); // Access userId from auth state slice
  // Handle missing or invalid userId gracefully
  if (!userId) {
    return <Navigate to="/login" replace={true} />; // Redirect to login page
  }
  // If userId is valid, render the children component
  return children;
}
