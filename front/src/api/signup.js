import { instance } from './index.js'


function login(data) {
    return instance.post('/auth/login', data)
}

function singup(data) {
    return instance.post('/auth/signup', data)
}


export { login, singup }