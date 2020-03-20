import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { getAuthUser } from '../../utils/api';


import clientAxios from '../../config/axios';
import {
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT

}from '../../types';
import tokenAuth from '../../config/token';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token')|| "null",
        user: null,
        authenticated: null,
        message: null,
        loading: true
    }
    const [state,dispatch] = useReducer(AuthReducer, initialState)
    
    const authenticatedUser = async() =>{
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }
        try {
            console.log("antes del get");
            const response = await getAuthUser()
            //matchear si es token veencido para eliminar el token del local storage
            console.log(response);
            console.log("despues del get")
            dispatch({
                type: GET_USER,
                payload: response.data.user

            });
        }catch (error) {
            console.log(error.response);
            const warning = {
                msg: error.response.data.message,
                type: 'warning-error'
            }
        }
    }
    const logIn = async datos => {//iniciar sesion
        console.log("login...")
        try {
            const response = await clientAxios.post('/login', datos);
            console.log("Estamos en la funcion login y la peticion post trajo esto "+response.data);
            alert(JSON.stringify(response.data));
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });

            console.log("Estamos dentro de login.. apunto de llamar a autenticateduser")
            // Obtener el usuario
            authenticatedUser();
        } catch (error) {
            if(error.response){
                console.log(error.response.data.message);
                const warning = {
                    msg: error.response.data.message,
                    type: 'warning-error'
                }
            }
            else{
                alert("El Backend no esta disponible, porfavor levantelo");
            }

            //dispatch({
            //    type: LOGIN_ERROR,
            //    payload: warning
            //})
        }
    }
    
    const logOut = () => {
        dispatch({
            type: LOG_OUT
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                logIn,
                logOut,
                authenticatedUser
            }}
        >{props.children}

        </AuthContext.Provider>
    )

}
export default AuthState;
