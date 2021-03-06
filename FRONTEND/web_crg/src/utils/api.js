import clientAxios from '../config/axios';
import clienteAxios from '../config/axios';

export const getAuthUser = () => clientAxios.get('/login');
export const getAuth = (data) => clientAxios.post('/login', data);
export const getUsers = () => clienteAxios.get('/users');
export const updateUser = (id,user) => clientAxios.put(`http://localhost:8001/users/${id}`,user);
export const postPdf = (id,data) => clienteAxios.post(`/users/${id}/pdf`,data);
export const getPdf = (id) => clienteAxios.get(`/users/${id}/pdf`,{
    responseType: "blob"
});
export const postExercise = (data,img) => clienteAxios.post(`/exercises`,
img,{headers: {
    'Name': `${data.name}`,
    'Region': `${data.region}`,
    'Group' : `${data.group}`
}},);
export const getExercises = () => clienteAxios.get('/exercises');
export const postRoutines = (id,data) => clienteAxios.post(`/users/${id}/routine`,data);
export const getRoutines = (id) => clienteAxios.get(`/users/${id}/routine`);