import React from "react";
import '../csscomponents/About.css';
import deepbag from '../img/deepbag.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import HttpIcon from '@material-ui/icons/Http';


export default function About() {

    const linkedin = "https://www.linkedin.com/in/deep-bag-360764170/";
    const Instagram = "https://www.instagram.com/erdeepbag/";
    const Facebook = "https://www.facebook.com/deep.bagh.509/";
    const Github = "https://github.com/deepbag";
    const Twitter = "https://twitter.com/erdeepbag";
    const Website = "https://badhobharat.in/";


    return(
        <>
            <div className="container-book about-con">
                <p className="img-center">
                    <img src={deepbag} alt="deepbag" />
                    <h2>Hi, I'm Deep Bag</h2> 
                    <p>Co-founder at Badho Bharat & Book Store | React & WordPress Developer | Computer Networking | Cloud Engineer | Certified Cloud Operate & Manage from Alibaba Academy</p>
                </p>
                <p className="social-media">
                    <div className="social-back">
                        <a href={linkedin} target="_blank" rel="noreferrer" className="social-space"><LinkedInIcon /></a>
                        <a href={Instagram} target="_blank" rel="noreferrer" className="social-space"><InstagramIcon /></a> 
                        <a href={Facebook} target="_blank" rel="noreferrer" className="social-space"><FacebookIcon /></a> 
                        <a href={Github} target="_blank" rel="noreferrer" className="social-space"><GitHubIcon /></a> 
                        <a href={Twitter} target="_blank" rel="noreferrer" className="social-space"><TwitterIcon /></a> 
                        <a href={Website} target="_blank" rel="noreferrer" className="social-space"><HttpIcon /></a> 
                    </div>  
                </p>
            </div>
            <div className="scnd-con">
                <h3>About Bookstore :</h3>
                <p>We have opened a free library platform for you. Where you can download any book of pdf for free. Read the book and make your mind educate. Self education is a key of success. Openreader is a open source platform.</p>
                <h3>About Developer :</h3>
                <p>Hello, I'm Deep Bag. I'm a computer science engineering student. There are some things that give me satisfaction. I don't like coding but I know why I like to make projects. I'm a certified WordPress Developer, React Developer and Cloud Engineer.</p>
                <h3>Books Copyright :</h3>
                <p>GNU General Public License v3.0 <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" style={{fontWeight: '700'}} target="_blank" rel="noreferrer">License</a></p>
                <h3>Privacy Policy :</h3>
                <p>We use the information we collect in various ways - Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</p>
            </div>
        </>
    )
}


