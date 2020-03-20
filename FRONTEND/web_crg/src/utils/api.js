import clientAxios from '../config/axios';
import clienteAxios from '../config/axios';

export const getAuthUser = () => clientAxios.get('/login');
export const getAuth = (data) => clientAxios.post('/login', data);
export const getUsers = () => clienteAxios.get('/users')