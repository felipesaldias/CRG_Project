import React, { useContext } from 'react'

import PanelContext from '../../context/panel/panelContext'

const Profile = props => {
    const panelContext = useContext(PanelContext)
    const {focususer,setUser} = panelContext
    var holi= "Holi"
    return(
        <div>hola
            {focususer}
        </div>
    );
}
export default Profile


