import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import AuthState from './context/auth/authState';
import PanelState from './context/panel/panelState';
import tokenAuth from './config/token';
import CrgPanel from './pages/CrgPanel';
import Home from './pages/Home/Home';
import PrivateRoute from './components/Routes/PrivateRoute';
import CreateAccount from './components/CreateAccount';
import RoutineMaker from './components/RoutineMaker/RoutineMaker';

//import UserList from './components/UsersList/UserList';


//revisa si el usuario ya esta logeado
//<Redirect from="/" to="/login" />
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
  
}
function App() {
  return (

    <BrowserRouter>
      <AuthState>
        <PanelState>
          
          <div className="body" >
            <Switch>
              {/*<Route exact path ="/" component={Login}/>*/}
              <Route exact path ="/" component={Home}/>
              <Route exact path ="/crg" component={Login} />
              <Route exact path ="/home" component={Home}/>
              <Route exact path ="/user" component={CreateAccount}/>
              <PrivateRoute exact path ="/crg/panel/*" component={CrgPanel} />
              <Route exact path="/*">
                <Redirect to='/home'></Redirect>
              </Route>
            </Switch>
            
          </div> 
        </PanelState>  
      </AuthState>
    </BrowserRouter>
    
  );
}

export default App;
