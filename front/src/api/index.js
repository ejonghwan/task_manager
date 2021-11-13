import axios from 'axios';

function createInstance() {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
    })
    return instance;
}

export const instance = createInstance()