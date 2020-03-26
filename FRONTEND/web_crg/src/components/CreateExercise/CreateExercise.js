import React, { useState } from 'react'

export default function CreateExcercise() {
  var initialState= 
  {name: "",
  region: "upper", 
  group: "neck" ,
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
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })
  }
  
  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image.raw)
    const config = { headers: { 'content-type': 'multipart/form-data' } }		
    let payload ={
      ...exercise,
      image: image.raw
    }
    console.log(payload)
    //await uploadToBackend('endpoint', {image: image.raw}, config)
  }
  const submit = e =>{
    alert(JSON.stringify(exercise))
  }

  return (
    <div class="row d-flex justify-content-center">
      <div>
        <h1>Crear ejercicio nuevo</h1>
        <div className="container" class="col offset-md-3">
          <div className="row">
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

                  <label>Region Cuerpo</label>
                  <select
                      className="u-full-width"
                      name="region"
                      onChange={handleState}
                      value={region}
                  >
                    <option value="upper">Tren superior</option>
                    <option value="lower">Tren inferior</option>
                  </select> 

                  <label>Grupo Muscular</label>
                  <select
                      className="u-full-width"
                      name="group"
                      onChange={handleState}
                      value={group}
                  >
                    <option value="neck">Cuello</option>
                    <option value="shoulders">Hombros</option>
                    <option value="back">Espalda</option>
                    <option value="arms">Brazos</option>
                    <option value="chest">Pecho</option>
                    <option value="abs">Abdominales</option>
                    <option value="gluteus">Gluteos</option>
                    <option value="legs">Piernas</option>
                    <option value="cardio">Cardio</option>
                  </select>
                  <label htmlFor="upload-button">
                    {
                      image.preview ? <img src={ image.preview } width="230" height="200" /> : (
                        <>
                          <h5 className="text-center">Upload your photo</h5>
                        </>
                      )
                    }
                  </label>
                  <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange}/>
                  <br />

                  <button
                      type="submit"
                      className="u-full-width button-primary"
                      onClick={handleUpload}
                  >Crear cuenta</button>
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