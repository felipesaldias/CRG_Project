import React, {useContext, useState} from 'react';
import './EditUser.css';
import PanelContext from '../../context/panel/panelContext';
//import axios from 'axios';
import { updateUser} from '../../utils/api';


 const EditUser = () => {
    const panelContext = useContext(PanelContext)
    const {focususer} = panelContext;
    var initialState= focususer?{name: focususer.name,
                                rut: focususer.rut,
                                pass: focususer.pass,
                                email: focususer.email,
                                phone: focususer.phone,
                                type: focususer.type}
                                :
                                {name: "",
                                rut: "", 
                                pass: "" ,
                                email: "",
                                phone: "", 
                                type: "" }
    
    const [user, handleUser] = useState(initialState);

    const {name , rut, pass, email, phone, type} = user
    const submit = e =>{
      e.preventDefault(); 
      console.log(user);
      updateUser(focususer._id,user).then(result =>{
		  alert(JSON.stringify(result.data));
	  });
      //axios.put(`http://localhost:8001/users/${focususer._id}`,user).then(result =>{alert(result.data.msg)})

      }
  
      const handleState = e =>{
        handleUser({
          ...user,
          [e.target.name]: e.target.value
        })      
      }
    return (
        <div>
            editar
            {focususer? focususer.name
            :null

            }
            <div>
                
                <div className="container shadow bg-light w-50 mx-auto my-5 p-5">
                    <div className="row">
                        <div div className="titulo col col-12 p-3 mb-4">
                            <h1>Editar cuenta de usuario</h1>
                        </div>
                        <div className="col col-12 p-0 py-4">
                            <form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0 col-3">
                                            <span className="input-group-text col-11">Nombre</span>
                                        </div>
                                        <input 
                                            type="text"
                                            name="name"
                                            className="form-control col-9"
                                            onChange={handleState}
                                            placeholder="Ingrese nombre"
                                            value={name}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0 col-3">
                                            <span className="input-group-text col-11">Rut</span>
                                        </div>
                                        <input 
                                            type="number"
                                            name="rut"
                                            className="form-control col-9"
                                            onChange={handleState}
                                            placeholder="Ingrese rut sin puntos ni digito verificador"
                                            value={rut}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0 col-3">
                                            <span className="input-group-text col-11">Contraseña</span>
                                        </div>
                                        <input    
                                            type="password"
                                            name="pass"
                                            className="form-control col-9"
                                            onChange={handleState}
                                            value={pass}

                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0 col-3">
                                            <span className="input-group-text col-11">Email</span>
                                        </div>
                                        <input 
                                            type="email"
                                            name="email"
                                            className="form-control col-9"
                                            onChange={handleState}
                                            value={email}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0 col-3">
                                            <span className="input-group-text col-11">Telefono</span>
                                        </div>
                                        <input 
                                            type="number"
                                            name="phone"
                                            className="form-control col-9"
                                            onChange={handleState}
                                            value={phone}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-5">
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0 col-3">
                                            <span className="input-group-text col-11">Tipo de cuenta</span>
                                        </div>
                                        <select
                                            className="selector form-control col-9"
                                            name="type"
                                            onChange={handleState}
                                            value={type}
                            
                            
                                        >
                                        <option value="cliente">Cliente</option>
                                        <option value="entrenador">Entrenador</option>
                                        <option value="nutricionista">Nutricionista</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">    
                                    <input
                                        type="submit"
                                        className="btn btn-info d-block mx-auto"
                                        onClick={submit}
                                        value="Editar Usuario"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default EditUser
