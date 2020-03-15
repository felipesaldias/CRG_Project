import { 
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types';
export default (state,action) => {
    switch(action.type) {
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false 
            }
            case GET_USER:
                return {
                    ...state,
                    authenticated: true,
                    user: action.payload,
                    loading: false 
                }
    }
}