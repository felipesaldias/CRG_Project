import React, {useReducer} from 'react';
import PanelContext from './panelContext';
import PanelReducer from './panelReducer';

import{
    SET_USER,
    REMOVE_USER
}from '../../types';

const PanelState = props =>{
    const initialState = {
        focususer: null  
    }
    const [state,dispatch] = useReducer(PanelReducer, initialState)
    
    const setUser = async user =>{
        dispatch({
            type: SET_USER,
            payload: user
        });
    }
    const removeUser = async user =>{
        dispatch({
            type: REMOVE_USER,
            payload: user
        });
    }
    return(
        <PanelContext.Provider
            value={{
                focususer: state.focususer,
                setUser,
                removeUser
            }}
        >{props.children}

        </PanelContext.Provider>
    )

}
export default PanelState;
