import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {getPdf}from '../../utils/api'
import PanelContext from '../../context/panel/panelContext'
import axios from "axios";

const Profile = props => {
    const panelContext = useContext(PanelContext)
    const {focususer} = panelContext

    const onClick=async()=>{
      getPdf(focususer._id).then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
    }
    return(
        <div>hola
            {focususer.name}
            <div><Link to='/crg/panel/user/edit'>Editar Informacion</Link></div>
            <div><Link to='/crg/panel/user/loadpdf'>Subir Pdf</Link></div>
            <div><Link to='/crg/panel/user/routinemaker'>Routine</Link></div>
            
            <button type="button" class="btn btn-success btn-block" onClick={onClick}>Descargar pdf</button>
                           
        </div>
    );
}
export default Profile


