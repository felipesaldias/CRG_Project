import React, {useState, useContext,useEffect} from 'react';
import './UploadPdf.css'
import {postPdf}from '../../utils/api'
import PanelContext from '../../context/panel/panelContext'
var fileDownload = require('js-file-download');

const UploadPdf = (props) => {
    
    const panelContext = useContext(PanelContext)
    const {focususer} = panelContext;
    
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('choose File')
    
    const checkFocus=()=>{
        if(!focususer){
            alert("Debe seleccionar un usuario sobre el cual trabajar, será redirigido")
            props.history.push(
                {
                  pathname: '/crg/panel/user',
                  search: '?from=loadpdf',
                  //state: { detail: response.data }
                })
                return
        }
        //return this.state.oncalendar[uuid].exercise
    }
    useEffect(() => {
        checkFocus()
    }, [])
    const onChangeHandler=event=>{
        var expdf =event.target.files[0].name.split(".")[1]
        if(expdf != 'pdf'){
            alert("El archivo debe ser formato pdf")
            return null
        }

        console.log(event.target.files[0])
        let archivo=event.target.files[0]
        setFile(event.target.files[0])
        setFilename(event.target.files[0].name)
    }
    const onClickHandler=()=>{
        

        const data = new FormData() 
        console.log("el archivo que vamos a appendear es")
        console.log(file)
        data.append('file', file)
        console.log(data.entries())

        
        postPdf(focususer._id, data).then(result =>{
            console.log("result es: " +JSON.stringify(result.data))
           console.log("")

        });
    }
    return (
        <div>
            <div className="container shadow bg-light w-50 mx-auto my-5 p-5">
                <div className="row justify-content-center">
                    <div className="titulo col col-12 p-3">
                        <h1 className="text-center text-shadow">Subir Archivo PDF</h1>
                    </div>
                    <div className="col col-6 p-0 py-4">
                        <form method="post" action="#" id="#">
                            <div className="form-group files m-3">
                                <input 
                                    type="file" 
                                    name="pdf" 
                                    id="pdf"
                                    onChange={onChangeHandler} 
                                    className="form-control" 
                                    multiple=""
                                />
                            </div>   
                        </form>    
                    </div>
                </div>
                { filename != "choose File"? <div className= "text-center mb-4 ">{filename}</div>
                  : null
                }
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-info d-block mx-auto mb-5"
                        onClick={onClickHandler}
                        value="Subir PDF"
                    />
                </div>
            </div>
        </div>
    );
};

export default UploadPdf;