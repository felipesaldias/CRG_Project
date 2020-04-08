import React, { useContext } from '../../../node_modules/react';
import AuthContext from '../../context/auth/authContext';
import PanelContext from '../../context/panel/panelContext'
import { Fragment } from 'react';
import "./Header.css"
import  logo from "./logo.jpeg"

const Header = () => {
    const authContext = useContext(AuthContext);
    const {user, logOut} = authContext;
    const panelContext = useContext(PanelContext);
    const {focususer} = panelContext;
    const handleLogOut = () =>{
        logOut();
    };
    return (
        
        <Fragment>

            <div class= "top-div py-2 shadow-sm">
                <img className="mr-2" src={logo} width="40" height="40" alt=""/>
                <span class=" font-weight-bold text-secondary mr-auto ml-2 ">
            {user ? <span class="pb-2 align-items-center justify-content-center ">Hola {user.type}!</span>
            : null
            }
                </span>
                {user ?
                    <button class= "btn btn-link-secondary btn-sm mr-3 mt-2 float-right" type="button"
                    onClick ={handleLogOut}
                    >Cerrar Sesion</button>
                : null
                }      
            </div>

          
            
            {focususer?

            <div class="bottom-div shadow-sm pt-3 pl-3 mb-3 mt-2 font-weight-bold">

                <span class="float-top">Estas trabajando sobre: {focususer.name} {focususer.rut}
                <button class="btn btn-link btn-sm float-right " type="button">Cambiar usuario</button>
                </span>
            </div>
            : null
            
            }
            
            
                
            
           
            
        </Fragment>
        
    );
}
export default Header;