import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'
const userUrl = 'http://localhost:3001/api/users'

const login = async (creds) => {
    const res = await axios.post(baseUrl, creds)
    console.log(res.data)
    return res.data
}

const register = async (creds) => {
    const res = await axios.post(userUrl, creds)
    return res.data
}

export default { login, register } // eslint-disable-line