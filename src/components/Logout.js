import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
import { useHistory } from 'react-router-dom'
import { logoutClear } from '../reducers/personalReducer'
import { LogoutOutlined } from '@ant-design/icons'
import personalService from '../services/personalService' 

const Logout = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        window.localStorage.clear()
        dispatch(logout())
        dispatch(logoutClear())
        personalService.setToken(null)
        history.push('/')
    }

    return (
        <a style={{textDecoration: 'none', color: 'black'}} onClick={handleLogout} href="#" role="button"><LogoutOutlined/>Logout</a> // eslint-disable-line
    )

}

export default Logout