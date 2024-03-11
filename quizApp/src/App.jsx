import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './components/Main'
import Quiz from './components/Quiz'
import Result from './components/Result'
import {checkUserExist} from '../src/Attempts/attempts'
//react routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main> },
    {
      path: '/quiz',
      element: <checkUserExist><Quiz/></checkUserExist>},
      {
        path: '/result',
        element: <checkUserExist><Result/></checkUserExist> },
])
function App() {
  return (
    <>
<RouterProvider router= {router} />
   
    </>
  )
}

export default App
