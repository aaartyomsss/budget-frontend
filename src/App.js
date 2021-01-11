import React, { useEffect } from 'react'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './reducers/userReducer'

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state)

  useEffect(() => {
    const userJSON = window.localStorage.getItem('loggedInUser')
    console.log(userJSON)
    if(userJSON) {
      const parsed = JSON.parse(userJSON)
      dispatch(login(parsed))
    }
  }, [dispatch])

  return (
    <div>
      { user === null ? 
        <Login />
        : <p>You are logged in!</p>
      }
    </div>
  )

}

export default App