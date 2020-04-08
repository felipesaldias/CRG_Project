import React, { useState } from 'react'
import './CreateExercise.css'
import {postExercise}from '../../utils/api'

export default function CreateExercise() {
  var initialState= 
  {name: "",
  region: "cardio", 
  group: "cardio" ,
}

const [exercise, handleExercises] = useState(initialState);
const [image, setImage] = useState({preview: '', raw: ''});

const {name , region, group} = exercise
  
const handleState = e =>{
  handleExercises({
    ...exercise,
    [e.target.name]: e.target.value
  })      
}
  const handleChange = (e) => {
    var ext_image =e.target.files[0].name.split(".")[1]
    if((ext_image != 'png' ) && (ext_image != "jpeg" ) && (ext_image != "jpg")){
      alert("Formato de la imagen debe ser png, jpeg o jpg")
      return null
    }

    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })
  }
  
  const handleUpload = async (e) => {
    
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', image.raw)
    const config = { headers: { 'content-type': 'multipart/form-data' } }		
    // let payload ={
    //   ...exercise,
    //   image: image.raw
    // }
    let img=formData
    console.log(exercise)
    //await uploadToBackend('endpoint', {image: image.raw}, config)
    postExercise(exercise,img).then(
      alert("El ejercicio se agrego exitosamente a la db"))
  }
  const submit = e =>{
    alert(JSON.stringify(exercise))
  }
  var exercises_type ={
    upper: ['neck','shoulders','back','arms','chest','abs'],
    upper_es: ['Cuello','Hombros','Espalda','Brazos','Pecho','Abdominales'],
    lower: ['gluteus','legs'],
    lower_es: ['Gluteos','Piernas'],
    cardio: ['cardio'],
    cardio_es: ['Cardio']
    }
  return (
    <div>
      <div className="container shadow bg-light w-50 mx-auto my-5 p-5">
        <div className="row">


            <div className="titulo col col-12 p-3 mb-4">
              <h1 className="text-center text-shadow">Crear ejercicio nuevo</h1>
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
                      <span className="input-group-text col-11">Region Cuerpo</span>
                    </div>
                    <select
                        className="form-control col-9"
                        name="region"
                        onChange={handleState}
                        value={region}
                    >
                      <option value="upper">Tren superior</option>
                      <option value="lower">Tren inferior</option>
                      <option value="cardio">Cardio</option>
                    </select> 
                  </div>
                </div>
                <div className="form-group mb-5">
                  <div className="input-group">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Grupo Muscular</span>
                    </div>
                    <select
                        className="form-control selector col-9"
                        name="group"
                        onChange={handleState}
                        value={group}
                    >
                      {exercises_type[exercise.region].map((g,i)=>
                        <option value={g}>{exercises_type[exercise.region+"_es"][i]}</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="form-group row shadow border rounded m-0 p-3 mb-5">
                  <label className="control-label col-6 m-0 px-2" htmlFor="upload-button">
                    {
                      image.preview ? <div className="imagecontainer col m-0 p-0"><img className="col m-0 p-0 rounded" src={ image.preview }/></div> : (
                        <>
                          <h5 className="titulo text-left">Subir imagen de ejercicio:</h5>
                        </>
                      )
                    }
                  </label>
                  <input 
                      className="form-control-file align-items-end p-0 col-6" 
                      type="file" 
                      id="upload-button"  
                      onChange={handleChange}
                  />
                </div>

                  <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-info d-block mx-auto"
                        onClick={handleUpload}
                        value="Crear Ejercicio"
                    />
                  </div>
              </form>  
          </div>
        </div>
      </div>
      
    </div>
  )
}
{/* <div class="d-flex justify-content-center">
        <label htmlFor="upload-button">
          {
            image.preview ? <img src={ image.preview } width="200" height="200" /> : (
              <>
                <h5 className="text-center">Upload your photo</h5>
              </>
            )
          }
        </label>
        <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange}/>
        <br />
      </div>
      <div class="d-flex justify-content-center">
        <button  onClick={handleUpload}>Upload</button>
      </div> */}