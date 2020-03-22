import{
    SET_USER,
    REMOVE_USER
    //actions
} from '../../types';
export default(state,action)=> {
    switch(action.type){
        
        case SET_USER:
            return{
                ...state,
                focususer: action.payload
            }
        case REMOVE_USER:
            return{
                ...state,
                focususer: null
            }
        default:
            return state; 
    }
}