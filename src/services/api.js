import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 30000
})

export default api