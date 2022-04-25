import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emtlab2backend193018.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;