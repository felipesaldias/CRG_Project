import{
    SET_USER
    //actions
} from '../../types';
export default(state,action)=> {
    switch(action.type){
        
        case SET_USER:
            return{
                ...state,
                focususer: action.payload
            }
        default:
            return state; 
    }
}