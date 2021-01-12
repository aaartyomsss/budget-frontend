import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
import { useHistory } from 'react-router-dom'

const Logout = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        window.localStorage.clear()
        dispatch(logout())
        history.push('/')
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Logout