import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import boton from '../../assets/img/button.png';
import './Footer.css';
import PanelContext from '../../context/panel/panelContext'


const Footer = () => {

    const panelContext = useContext(PanelContext);
    const {removeUser} = panelContext;
    return (
        <div>
            <div className="footer-container shadow m-0 p-0 mt-3">
                <div className="wrap row w-100 mx-auto"> 
                    <div className="img-wrap col-2 m-0 p-0 pl-3 py-3">
                        
                    </div>
                    <div className="text-wrap col-10 m-0 p-0 pr-3 py-3">
                        <p className="texto">Developed by CRG Team &copy; Valdivia 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

/*                          
<button id="link" className="border-corner d-block">
    <img src={boton} width="40" height="40"></img>     
</button>
<Link
                            to='/crg/panel/'
                            id="link"
                            onClick={(e)=> removeUser()}
                            >Volver home</Link> */