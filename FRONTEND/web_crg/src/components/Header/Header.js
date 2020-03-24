import React, { useContext } from '../../../node_modules/react';
import AuthContext from '../../context/auth/authContext';
import PanelContext from '../../context/panel/panelContext'

const Header = () => {
    const authContext = useContext(AuthContext);
    const {user, logOut} = authContext;
    const panelContext = useContext(PanelContext);
    const {focususer} = panelContext;
    const handleLogOut = () =>{
        logOut();
    };
    return (
        <header>
            {user ? <p>Hola {user.type}</p>
            : null
            }
            {focususer? <p>te encuentras trabajando sobre: {focususer.name} {focususer.rut}</p>
            : null

            }
            <nav>
                {user ?
                    <button
                    onClick ={handleLogOut}
                    >Cerrar Sesion</button>
                : null
                }
            </nav>
        </header>
    );
}
export default Header;