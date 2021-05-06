import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../csscomponents/Home.css'
import db from "../firebase";
import deepbag from '../img/deepbag.jpg';
import Subscribe from './Subscribe';
import Popup from 'reactjs-popup';


export default function Home() {

    // fetch data from firebase start
    const [book, setBook] = useState([]);
    useEffect(() => {
        db.collection('Books').onSnapshot((snapshot) => {
            setBook(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    // fetch data from firebase end


    return(
        <>
            {/* Hero Section Start */}
            <div className="conatiner-banner">
                <div className="row">
                    <div className="col-md-8 cb">
                        <h3>Welcome to Our Library <br/><span>Find Your Favorite Book</span></h3>
                        <p>We have opened a free library platform for you. Where you can download any book of pdf for free. Read the book and make your mind educate. Self education is a key of success. Openreaderio is a open source platform.</p>
    
                        <Popup trigger={<button>☕ Grab a Coffee</button>} modal>
                            <div className="coffeepop">
                                <h3><span style={{paddingRight: '8px'}}>☕</span>  Do you want to meet me or have a meeting?</h3>
                                <ol>
                                    <li>I would be very happy to meet you! Google Meet, Zoom, Physical!</li>
                                    <li>You can talk to me in any topic! Write down the points you want to ask!</li>
                                    <li>Hey buddy! also check my other website <a href="https://badhobharat.in/" style={{color: 'red'}} target="_blank" rel="noreferrer">Badho Bharat</a></li>
                                    <li>Please donate if you want to have a meeting! <a href="https://rzp.io/l/Ye1QdrAeQ" style={{color: 'red',}} target="_blank" rel="noreferrer">Donate</a></li>
                                    <li>You can also contact me on my <a href="https://www.linkedin.com/in/deep-bag-360764170/" style={{color: 'red'}} target="_blank" rel="noreferrer">linkedin</a> 24/7 hour available!</li>
                                </ol>
                                <h4 className="popin">I'm happy to connecting with you! <span>❤️</span></h4>
                            </div>
                        </Popup>
                        
                    </div>
                    <div className="col-md-4 cb2">
                        <img src={deepbag} alt="deepbag" width="400px"/>
                    </div>
                </div>
            </div>
            {/* Hero Section Stop */}

            {/* User Subscription Form start */}
            <Subscribe />
            {/* User Subscription Form end */}

            {/* Recent upload book heading start */}
            <div className="container-recent-book">
                <h2>Educate Your Mind:</h2> 
            </div>
            {/* Recent upload book heading end */}
            
            <div className="container-book">
                <div className="row">
                {/* Books Loop start */}
                {
                    book.map(
                        (pbook) => (
                            <div className="col-md-3">
                                <div className="booklist">
                                    {/* <img src={pbook.bookimgurl} alt={pbook.bookimgurl.name} width="100" height="150" /> */}
                                    <h3>{pbook.booktitle}</h3>
                                    <p>Author : {pbook.bookauthor}</p>
                                    <about>{pbook.bookdescription}</about>
                                    <a href={pbook.bookpdfurl}><button>Download</button></a>
                                    {/* <h3>{pbook.bookurl}</h3> */}
                                </div>   
                            </div>
                        )
                    )
                } {/* Books Loop start */}
                </div>
            </div>
        </>
    )
}
