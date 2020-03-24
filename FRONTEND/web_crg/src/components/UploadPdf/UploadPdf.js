import React, {useState, useContext} from 'react';
import './UploadPdf.css'
import {postPdf}from '../../utils/api'
import PanelContext from '../../context/panel/panelContext'

const UploadPdf = () => {

    const panelContext = useContext(PanelContext)
    const {focususer} = panelContext;

    const [fileState, setfileState] = useState({
        selectedFile: '',
        loaded: ''
    })
    const onChangeHandler=event=>{

        console.log(event.target.files[0])
        let archivo=event.target.files[0]
        setfileState({
            selectedFile: archivo,//archivo,
            loaded: 0
        })
    }
    const onClickHandler=()=>{
        const data = new FormData() 
        console.log("el archivo que vamos a appendear es")
        console.log(fileState.selectedFile)
        data.append('file', fileState.selectedFile)
        console.log(data)
        postPdf(focususer._id,data).then(result =>{
            alert(JSON.stringify(result.data));
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