import axios from 'axios';

const clienteAxios = axios.create({
    //baseURL : process.env.REACT_APP_BACKEND_URL
    baseURL: "http://localhost:8001"
});

export default clienteAxios;