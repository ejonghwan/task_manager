import { instance } from './index.js';


function posts(data) {
    // console.log('data', data)
    return instance.post('/posts', data)
}

export { posts }