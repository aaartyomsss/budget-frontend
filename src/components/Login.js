import React, { useState } from 'react'
import loginService from '../services/loginService'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'

const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const credentials = {
            username: username,
            password: password
        }
        try {
            const res = await loginService.login(credentials)
            window.localStorage.setItem('loggedInUser', JSON.stringify(res))
            dispatch(login(res))
        } catch (error) {
            console.error(error.message)
        }
        setUsername('')
        setPassword('')
    }

    return (
        <form onSubmit={handleSubmit}>
            Username:
            <input
                name='username'
                onChange={({target}) => setUsername(target.value)}
                value={username}
            />
            <br/>
            Password:
            <input
                name="password"
                type="password"
                onChange={({target}) => setPassword(target.value)}
                value={password}
            />
            <br/>
            <button type="submit">Login</button>
        </form>
    )

}

export default Login