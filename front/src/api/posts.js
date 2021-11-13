import { instance } from './index.js';


function posts(data) {
    return instance.post('/posts', data)
}

export { posts }