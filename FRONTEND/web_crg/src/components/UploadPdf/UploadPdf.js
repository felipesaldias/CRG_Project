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
        

        for (var pair of data.entries()){
            console.log(pair[0]+ ', '+ pair[1]); 
        }
        //console.log(data.getAll())
        postPdf(focususer._id, data).then(result =>{
            //alert(JSON.stringify(result.data));
            console.log("result es: " +JSON.stringify(result))
            fileDownload(result.files, "descargado.pdf")
            //window.location.assign(result.responseText)
        });
    }
    return (
        <div class="container">
	        <div class="row d-flex justify-content-center">
	          <div class="col-md-6">
	              <form method="post" action="#" id="#">
                      <div class="form-group files">
                        <label>Upload Your File </label>
                        <input type="file" name="file" onChange={onChangeHandler} class="form-control" multiple=""/>
                        </div>   
                  </form>    
	          </div>
	        </div>
            <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
        </div>
    );
};

export default UploadPdf;