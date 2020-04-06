import React, {useState, useContext} from 'react';
import './UploadPdf.css'
import {postPdf}from '../../utils/api'
import PanelContext from '../../context/panel/panelContext'
var fileDownload = require('js-file-download');

const UploadPdf = () => {

    const panelContext = useContext(PanelContext)
    const {focususer} = panelContext;

    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('choose File')
    const onChangeHandler=event=>{

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
                    <div className="titulo col col-12 p-3 mb-4">
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
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-info d-block mx-auto"
                        onClick={onClickHandler}
                        value="Subir PDF"
                    />
                </div>
            </div>
        </div>
    );
};

export default UploadPdf;