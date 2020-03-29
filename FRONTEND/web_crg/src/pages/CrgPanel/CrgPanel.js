import React, {Component, useContext, useEffect} from '../../../node_modules/react';
import './CrgPanel.css';
//import PanelState from './context/auth/panelState';
import PanelContext from '../../context/panel/panelContext';
import UserList from '../../components/UsersList/UserList';
import Profile from '../../components/Profile/Profile';
import CreateAccount from '../../components/CreateAccount';
import CreateExercise from '../../components/CreateExercise/CreateExercise';
import EditUser from '../../components/EditUser/EditUser';
import HomePanel from '../../components/HomePanel/HomePanel';
import CreateRoutine from '../../components/CreateRoutine/CreateRoutine';
import UploadPdf from '../../components/UploadPdf/UploadPdf';
import Calendar from '../../components/Calendar/Calendar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListExercises from '../../components/ListExercises/ListExercises';

import { Link,BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Fragment } from 'react';



const CrgPanel = props => {
 // <PanelState></PanelState>
  
    const panelContext = useContext(PanelContext);
    const {focususer,setUser} = panelContext;
    //alert(focususer);
    //<UserList></UserList>
    
    

    //<PrivateRoute exact path ="/crg/panel" component={CrgPanel} />
    //<li><Link to='/crg/panel/users'>Listado de Usuarios</Link></li>
    //<li><Link to='/crg/panel/trainer'>Listado de Entrenadores</Link></li>
    //<li><Link to='/crg/panel/nutritionist'>Listado de Nutricionistas</Link></li>
    return (
      <Fragment>
        <Header></Header>
          <div>
            <Switch>
              <Route exact path ="/crg/panel/" component={HomePanel}/>
              <Route exact path ="/crg/panel/profile" component={Profile}/>
              <Route exact path ="/crg/panel/newaccount" component={CreateAccount} /> 
              <Route exact path ="/crg/panel/user" component={UserList} />
              <Route exact path ="/crg/panel/user/edit" component={EditUser} /> 
              <Route exact path ="/crg/panel/user/createroutine" component={CreateRoutine}/>
              <Route exact path ="/crg/panel/user/loadpdf" component={UploadPdf}/>
              <Route exact path ="/crg/panel/user/calendar" component={Calendar}/>
              <Route exact path ="/crg/panel/addexercise" component={CreateExercise}/>
              <Route exact path ="/crg/panel/exercises" component= {ListExercises}/>
            </Switch>
          </div> 
        <Footer></Footer>    
      </Fragment>
    );
  }
  
  //<Route exact path ="/crg/panel/user/routine" component={}/> 

export default CrgPanel;