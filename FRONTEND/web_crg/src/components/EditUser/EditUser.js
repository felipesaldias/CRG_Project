import React, {useContext} from 'react'
import PanelContext from '../../context/panel/panelContext'

 const EditUser = () => {
    const panelContext = useContext(PanelContext)
    const {focususer} = panelContext;
    return (
        <div>
            editar
            {focususer? focususer.name
            :null

            }
           
        </div>
    )
}
export default EditUser
