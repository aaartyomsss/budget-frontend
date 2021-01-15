import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/personal-plan'

let token = null

const setToken = t => {
    token = t
}

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const addExpense = async (toAdd) => {

    const config = {
        headers: { Authorization: `bearer ${token}`}
    }

    const res = await axios.post(baseUrl, toAdd, config)
    console.log(res)
    return res.data
}

export default { getAll, addExpense, setToken } // eslint-disable-line