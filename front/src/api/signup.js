import { instance } from './index.js'



export function singup(data) {
    return instance.post('/auth/signup', data)
}
