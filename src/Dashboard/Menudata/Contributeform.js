import React, { useState } from 'react';
import '../css/Contributeform.css';
import db from '../../../src/firebase';

export default function Contributeform() {

    const [contributername, setContributername] = useState("");
    const [contributerchanges, setContributerchanges] = useState("");
    const [contributerimageurl, setContributerimageurl] = useState("");
    const [contributerlinkedin, setContributerlinkedin] = useState("");
    const [contributergithub, setContributergithub] = useState("");
    const [contributerwebsite, setContributerwebsite] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("Contributers")
        .add({
            contributername: contributername,
            contributerchanges: contributerchanges,
            contributerimageurl: contributerimageurl,
            contributerlinkedin: contributerlinkedin,
            contributergithub: contributergithub,
            contributerwebsite: contributerwebsite
        })
        .then(() => {
            setLoader(false);
            alert("Your Contributer has been Contributed👍");
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setContributername("");
        setContributerchanges("");
        setContributerimageurl("");
        setContributerlinkedin("");
        setContributergithub("");
        setContributerwebsite("");
    };

    return (
        <>
            <div className="container-contributeform">
                <form className="form-contribute" onSubmit={handleSubmit}>
                    <label>Contributer Name</label>
                    <input
                        placeholder="Contributer Name"
                        value={contributername}
                        onChange={(e) => setContributername(e.target.value)}
                    />

                    <label>Contributer Changes</label>
                    <textarea
                        placeholder="Book Description"
                        value={contributerchanges}
                        onChange={(e) => setContributerchanges(e.target.value)}
                        minLength="140"
                        maxlength="140"
                    />

                    <label>Contributer Image</label>
                    <input 
                        type="url" 
                        placeholder="Contributer Image URL"
                        value={contributerimageurl}
                        onChange={(e) => setContributerimageurl(e.target.value)}
                    />

                    <label>Contributer Linkedin</label>
                    <input 
                        type="url" 
                        placeholder="Contributer Linkedin URL"
                        value={contributerlinkedin}
                        onChange={(e) => setContributerlinkedin(e.target.value)}
                    />

                    <label>Contributer Github</label>
                    <input 
                        type="url" 
                        placeholder="Contributer Github URL"
                        value={contributergithub}
                        onChange={(e) => setContributergithub(e.target.value)}
                    />

                    <label>Contributer Website</label>
                    <input 
                        type="url" 
                        placeholder="Contributer Website URL"
                        value={contributerwebsite}
                        onChange={(e) => setContributerwebsite(e.target.value)}
                    />

                    <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                    >
                       Contribute
                    </button>
                </form>
            </div>
        </>
    )
}
