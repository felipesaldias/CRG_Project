import React, { useContext } from '../../../node_modules/react';
import AuthContext from '../../context/auth/authContext';
import PanelContext from '../../context/panel/panelContext'
import { Fragment } from 'react';
import "./Header.css"
import  logo from "./logo.jpeg"
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const authContext = useContext(AuthContext);
    const {user, logOut} = authContext;
    const panelContext = useContext(PanelContext);
    const {focususer,removeUser} = panelContext;
    const handleLogOut = () =>{
        logOut();
    };

    const changeUser = e =>{
        //let history = useHistory();
        removeUser()
        window.location.href='/crg' 
        //props.history.push('/crg/panel/user')      
      }
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
                <Link
                  to='/crg/panel/user/profile'
                  id="link2"
                 >
                     Estas trabajando en: {focususer.name} , Rut: {focususer.rut}
                </Link>

                <span class="float-top">
                <button class="btn btn-link btn-sm float-right " type="button" >
                <Link
                            to='/crg/panel/user'
                            id="link"
                            onClick={(e)=> removeUser()}
                            >Cambiar Usuario</Link>
                </button>
                </span>
            </div>
            : null
            
            }
            
            
                
            
           
            
        </Fragment>
        
    );
}
export default Header;