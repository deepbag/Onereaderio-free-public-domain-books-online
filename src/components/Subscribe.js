import '../csscomponents/Home.css';
import '../csscomponents/Subscribe.css';
import React, { useState } from 'react';
import db from "../firebase";

export default function Subscribe() {

    // Store User Data to Firebase start
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const subsSubmit = (e) => {
        e.preventDefault();

        db.collection("Users").add({
            name: name,
            email: email,
      });

      setName("");
      setEmail("");
    };
    // Store User Data to Firebase end


    return (
        <div className="conainer-banner con-form" id="axis">
            <form onSubmit={subsSubmit} className="object van move-right">
            <input
                placeholder="Your Name"
                className="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                placeholder="Your Email"
                className="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
                <button type="submit" className="submitInput">Subscribe</button>
            </form>
        </div>
    )
}


