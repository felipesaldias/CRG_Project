import clientAxios from '../config/axios';
import clienteAxios from '../config/axios';

export const getAuthUser = () => clientAxios.get('/login');
export const getAuth = (data) => clientAxios.post('/login', data);
export const getUsers = () => clienteAxios.get('/users');
export const updateUser = (id,user) => clientAxios.put(`http://localhost:8001/users/${id}`,user);
export const postPdf = (id,data) => clienteAxios.post(`/users/${id}/pdf`,data);