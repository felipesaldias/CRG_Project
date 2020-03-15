import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clientAxios from '../../config/axios';
import {
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT

}from '../../types';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token')|| "null",
        user: null,
        authenticated: null,
        message: null,
        loading: true
    }
    const [state,dispatch] = useReducer(AuthReducer, initialState)

    const logIn = async datos => {//iniciar sesion
        try {
            const response = await clientAxios.post('/login', datos);
            console.log("Estams en la funcion login y la peticion post trajo esto "+response.data);
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });

            // Obtener el usuario
            //authenticatedUser();
        } catch (error) {
            console.log(error.response.data.message);
            const warning = {
                msg: error.response.data.message,
                type: 'warning-error'
            }

            //dispatch({
            //    type: LOGIN_ERROR,
            //    payload: warning
            //})
        }
    }

    // Cierra la sesión del usuario
    // const cerrarSesion = () => {
    //     dispatch({
    //         type: CERRAR_SESION
    //     })
    // }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                logIn
            }}
        >{props.children}

        </AuthContext.Provider>
    )

}
export default AuthState;

 