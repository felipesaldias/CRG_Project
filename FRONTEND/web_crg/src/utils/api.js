import clientAxios from '../config/axios';

export const getAuthUser = () => clientAxios.get('/login');
