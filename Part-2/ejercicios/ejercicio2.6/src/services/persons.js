import axios from 'axios'
const baseUrl = 'http://localhost:3001/person'

const getAll = () => {
    const reques = axios.get(baseUrl)
    return reques.then(response => response.data)
}

const create = newObject => {
    const reques = axios.post(baseUrl, newObject)
    return reques.then(response => response.data)
}

const deleted = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.status)
}

export default { getAll, create, deleted }