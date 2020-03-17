import clientAxios from './axios';

const tokenAuth = token =>{
    console.log("en tokenAuth");
    if(token){
        clientAxios.defaults.headers.common['x-access-token'] = token;    
    }
    else {
        delete clientAxios.defaults.headers.common['x-access-token'];
    }
}

export default tokenAuth;
