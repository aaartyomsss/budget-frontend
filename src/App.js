import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './reducers/userReducer'
import 'antd/dist/antd.css'
import Homepage from './components/Homepage'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import SingUp from './components/SignUp'
import NavBar from './components/NavBar'

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
      <NavBar user={user}/>
      <Switch>
        <Route path='/personal-plan'>
          <p>Personal plan</p>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/sign-up'>
          <SingUp/>
        </Route>

        <Route path='/'>
          { user === null ? 
          <Homepage/>
          : <Redirect to='personal-plan'/>
          }
        </Route>
      </Switch>
    </div>
  )

}

export default App