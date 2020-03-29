import React from 'react';
import { Link } from 'react-router-dom';

const HomePanel = () => {
    return (
        
        <div class="container flex-wrap " >

          <div class="row d-flex justify-content-center">
            <div class="col-xs-6 col-md-3">
            <button type="button" class="btn btn-default btn-lg">
              <Link to='/crg/panel/newaccount'>Crear Usuario</Link> 

            </button>
            </div>
            
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/user'>Listado de Usuarios</Link>
                </button>
            </div>
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/user/edit'>Editar un Usuario</Link>
                </button>   
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/user/routinemaker'>Crear una Rutina</Link>
                </button>
            </div>
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/user/loadpdf'>Subir Pdf</Link>
                </button>
            </div>
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/user/calendar'>Mostrar Calendario</Link>
                </button>
            </div>
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/addexercise'>Crear Ejercicio</Link>
                </button>
            </div>
            <div class="col-xs-6 col-md-3">
                <button type="button" class="btn btn-default btn-lg">
                    <Link to='/crg/panel/exercises'>Lista Ejercicio</Link>
                </button>
            </div>
          </div>
        
        </div>
    );
};

export default HomePanel;