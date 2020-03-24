import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import PanelContext from '../../context/panel/panelContext'

const Profile = props => {
    const panelContext = useContext(PanelContext)
    const {focususer,setUser} = panelContext
    var holi= "Holi"
    return(
        <div>hola
            {focususer.name}
            <div><Link to='/crg/panel/user/edit'>Editar Informacion</Link></div>
                           
        </div>
    );
}
export default Profile


