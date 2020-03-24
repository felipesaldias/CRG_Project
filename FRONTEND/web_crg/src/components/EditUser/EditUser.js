import React, {useContext, useState} from 'react'
import PanelContext from '../../context/panel/panelContext'
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
                <h1>Crear cuenta de usuario</h1>

                <div className="container">
                    <div className="row">
                        <div className="one-half column">
                            <form>
                            <label>Nombre</label>
                            <input 
                                type="text"
                                name="name"
                                className="u-full-width"
                                onChange={handleState}
                                placeholder="Ingrese nombre"
                                value={name}
                            />

                            <label>Rut</label>
                            <input 
                                type="number"
                                name="rut"
                                className="u-full-width"
                                onChange={handleState}
                                placeholder="Ingrese rut sin puntos ni digito verificador"
                                value={rut}
                            />

                            <label>Contraseña</label>
                            <input    
                                type="password"
                                name="pass"
                                className="u-full-width"
                                onChange={handleState}
                                value={pass}

                            />

                            <label>Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="u-full-width"
                                onChange={handleState}
                                value={email}
                            />
                            <label>Telefono</label>
                            <input 
                                type="number"
                                name="phone"
                                className="u-full-width"
                                onChange={handleState}
                                value={phone}
                            />

                            <label>Tipo de cuenta</label>
                            <select
                                className="u-full-width"
                                name="type"
                                onChange={handleState}
                                value={type}
                
                
                            >
                            <option value="cliente">Cliente</option>
                            <option value="entrenador">Entrenador</option>
                            <option value="nutricionista">Nutricionista</option>
                            </select>

                            <button
                                type="submit"
                                className="u-full-width button-primary"
                                onClick={submit}
                            >Actualizar Usuario</button>
                            </form>
                            </div>
                            <div className="one-half column">
                            <h2>titulo</h2>
        
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default EditUser
