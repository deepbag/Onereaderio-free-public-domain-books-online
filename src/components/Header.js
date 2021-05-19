import React from "react";
import { Link } from 'react-router-dom';
import '../csscomponents/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';
import AppsIcon from '@material-ui/icons/Apps';


export default function Header() {


    return(
        <>
            <div className="container-book-header">
                <a href="/"><h2 className="brand">readerio</h2></a>
                <div className="popbtn">
                    <Popup
                        trigger={open => (<button className="btn-bar">{open ? <AppsIcon /> : <AppsIcon />}</button>)}
                        position="bottom right" closeOnDocumentClick>
                        <div className="mob-menu">
                            <Link to="/" className="navmob">Home</Link>
                            <hr style={{color: '#000000'}} />
                            <Link to="/About" className="navmob">About</Link>
                            <hr style={{color: '#000000'}} />
                            <Link to="/Contributers" className="navmob">Contributers</Link> 
                            <hr style={{color: '#000000'}} />
                            <a href="https://www.linkedin.com/company/onereader/" target="_blank" rel="noreferrer" className="navmob">Linkedin</a>
                            <hr style={{color: '#000000'}} />
                            <a href="https://www.linkedin.com/in/deep-bag-360764170/" target="_blank" rel="noreferrer" className="navmob">Github</a>
                        </div>
                    </Popup>
                </div>
                <div className="navmenu">
                    <Link to="/" className="navlink">Home</Link>
                    <Link to="/About" className="navlink">About</Link>
                    <Link to="/Contributers" className="navlink">Contributers</Link> 
                </div> 
            </div>
        </>
    )
}
