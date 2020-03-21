import React, {Component, useContext} from '../../../node_modules/react';
import './CrgPanel.css';
//import PanelState from './context/auth/panelState';
import PanelContext from '../../context/panel/panelContext';
import UserList from '../../components/UsersList/UserList';

const CrgPanel = props => {
 // <PanelState></PanelState>
  
    const panelContext = useContext(PanelContext);
    const {focususer} = panelContext;
    alert(focususer);
    return (
      <div>
        <div>div CrgPanel</div>
        <UserList></UserList>
      </div>       
    );
  }


export default CrgPanel;