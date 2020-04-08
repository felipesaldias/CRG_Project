import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {getPdf}from '../../utils/api'
import PanelContext from '../../context/panel/panelContext'
import axios from "axios";
import "./Profile.css"

//DESACTIVAR BOTON PDF SI NO HAY PDF

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

      <div class="container">
      <div class="row justify-content-center align-items-center vh-90 py-5">
      
        <div class="col-6" >
   
   
          <div class="panel panel-info border">
            <div class="panel-heading">
    <h3 class="panel-title p-3">{focususer.name}</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                </div>
                <div class=" col-md-9 col-lg-9  mx-auto"> 
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>RUT:</td>
                        <td>{focususer.rut}</td>
                      </tr>
                      <tr>
                        <td>Correo:</td>
                        <td>{focususer.email}</td>
                      </tr>
                      <tr>
                        <td>Telefono</td>
                         <td>{focususer.phone}</td>
                      </tr>
                     
                    </tbody>
                  </table>
                  <div class="py-5">
                  <Link to='/crg/panel/user/edit' class="btn btn-info  btn-sm">Editar Informacion</Link>
                  <Link to='/crg/panel/user/loadpdf' class="btn btn-info  mx-2 btn-sm">Subir Pdf</Link>
                  <Link to='/crg/panel/user/routinemaker' class="btn btn-info  btn-sm">Crear rutina</Link>
                  <button type="button" class="btn btn-info my-3 mx-2 btn-sm" onClick={onClick}>Descargar pdf</button>
                  
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    );
}
export default Profile


