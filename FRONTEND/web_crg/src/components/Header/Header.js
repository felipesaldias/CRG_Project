import React, { useContext } from '../../../node_modules/react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
    const authContext = useContext(AuthContext);
    const {user, logOut} = authContext;
    const handleLogOut = () =>{
        logOut();
    };
    return (
        <header>
            {user ? <p>Hola {user.type}</p>
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