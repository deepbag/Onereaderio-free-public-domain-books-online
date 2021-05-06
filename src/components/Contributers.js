import React, { useState, useEffect } from 'react';
import db from '../firebase';
import '../csscomponents/Contributers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';


export default function Contributers() {

    // fetch data from firebase start
    const [contributerfetch, setContributerfetch] = useState([]);
    useEffect(() => {
        db.collection('Contributers').onSnapshot((snapshot) => {
            setContributerfetch(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    // fetch data from firebase end

    return (
        <>
            <div className="container-contributers">
                <p className="content-center">
                    <h2>Our Contributers</h2>
                    <p>It's a opensource platform. We thank you for your contribution to our project. You made your contribution to our project, it is our duty to give you credit. Here are all the people who contributed to our project.</p>
                </p>
            </div>

            <div className="container-contributers-loop">
                <div className="row">
                {
                    contributerfetch.map(
                        (pcontri) => (
                            <div className="col-md-3">
                                <div className="contributer-list">
                                    <img src={pcontri.contributerimageurl} alt="Deep Bag" width="100" />
                                    <h3>{pcontri.contributername}</h3>
                                    <p>{pcontri.contributerchanges}</p>
                                    <div className="social">
                                        <a href={pcontri.contributerlinkedin} target="_blank" rel="noreferrer" className="social-con"><LinkedInIcon /></a>  
                                        <a href={pcontri.contributergithub} target="_blank" rel="noreferrer" className="social-con"><GitHubIcon /></a> 
                                        <a href={pcontri.contributerwebsite} target="_blank" rel="noreferrer" className="social-con"><HttpIcon /></a> 
                                    </div>
                                </div>   
                            </div>
                        )
                    )
                }
                </div>
            </div>
        </>
    )
}

