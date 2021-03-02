import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './reducers/userReducer'
import 'antd/dist/antd.css'
import Homepage from './components/Homepage'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import SingUp from './components/SignUp'
import NavBar from './components/NavBar'
import Success from './components/Success'
import personalService from './services/personalService'
import { initialPersonalPlan } from './reducers/personalReducer'
import ExpensesList from './components/ExpensesList'
import SpendingForm from './components/SpendingForm'

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const personalExpenses = useSelector(state => state.personalExpenses)

  useEffect(() => {
    const userJSON = window.localStorage.getItem('loggedInUser')
    if(userJSON) {
      const fetch = async () => {
        const parsed = JSON.parse(userJSON)
        const allPersonal = await personalService.getAll()
        personalService.setToken(parsed.token)
        dispatch(login(parsed))
        dispatch(initialPersonalPlan(allPersonal, parsed.id))
      }
      fetch()
    }
  }, [dispatch]) // eslint-disable-line

  return (
    <div>
      <NavBar user={user}/>
      <Switch>
        <Route path='/personal-plan'>
          <ExpensesList expenses={personalExpenses}/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/sign-up'>
          <SingUp/>
        </Route>

        <Route path='/activated'>
          <Success button={true}/>
        </Route>

        <Route path='/successful-registration'>
          <Success button={false}/>
        </Route>

        <Route path='/spending-form'>
          <SpendingForm/>
        </Route>

        <Route path='/'>
          { user === null ? 
          <Homepage/>
          : <Redirect to='/personal-plan'/>
          }
        </Route>
      </Switch>
    </div>
  )

}

export default App