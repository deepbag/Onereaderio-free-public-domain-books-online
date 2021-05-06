import React from 'react';
import '../Dashboard/css/Dashboard.css';
import Bookform from './Menudata/Bookform';
import Contributeform from './Menudata/Contributeform';
import { auth } from '../firebase';

export default function Dashboard() {

    return (
        <> 
            <div className="conatiner-dashboard">
                <div className="welcome">
                    <h2>Welcome to the dashboard Deep Bag! <span class="logout-btn" onClick={() => auth.signOut()}>Logout</span></h2>
                    <p>We thank you for your contribution to our project. You made your contribution to our project, it is our duty to give you credit. Here are all the people who contributed to our project.</p>
                    {/* <button onClick={() => auth.signOut()}>Sign out</button> */}
                </div>
            </div>
            <div className="container-forms">
                <div className="row">
                    <div className="col-md-6">
                        <Bookform />
                    </div>
                    <div className="col-md-6">
                        <Contributeform />
                    </div>
                </div>
            </div>
        </>
    )
}
