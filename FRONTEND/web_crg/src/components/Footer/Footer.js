import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import PanelContext from '../../context/panel/panelContext'

const Footer = () => {

    const panelContext = useContext(PanelContext);
    const {removeUser} = panelContext;
    return (
        <div>
            <Link
             to='/crg/panel/'
             onClick={(e)=> removeUser()}
             >Volver home</Link>
        </div>
    );
};

export default Footer;