import React, { useState } from "react";
import '../css/Bookform.css';
// import { storage } from '../../firebase';
import db from '../../firebase';


// const [bookimg, setBookimg] = useState(null);
// storage.storage().ref().child(bookimg.name).put(bookimg)

const Upload = () => {

  const [booktitle, setBooktitle] = useState("");
  const [bookauthor, setBookauthor] = useState("");
  const [bookdescription, setBookdescription] = useState("");
  const [bookpdfurl, setBookpdfurl] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit =  (e) => {
    e.preventDefault();
    setLoader(true);

    // Upload Book Data in Firebase Firestore Start
    db.collection("Books")
      .add({
        booktitle: booktitle,
        bookauthor: bookauthor,
        bookdescription: bookdescription,
        bookpdfurl: bookpdfurl
      })
      .then(() => {
        setLoader(false);
        alert("Your book has been uploaded👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
      // Upload Book Data in Firebase Firestore end

    setBooktitle("");
    setBookauthor("");
    setBookpdfurl("");
    setBookdescription("");
  };

  return (
      <div className="container-bookform">
        <form className="form-book" onSubmit={handleSubmit}>
          <label>Book Title</label>
          <input
            placeholder="Book Title"
            value={booktitle}
            onChange={(e) => setBooktitle(e.target.value)}
          />

          <label>Book Author</label>
          <input
            placeholder="Book Author"
            value={bookauthor}
            onChange={(e) => setBookauthor(e.target.value)}
          />

          <label>Book PDF</label>
          <input 
            type="url" 
            placeholder="Book PDF URL"
            value={bookpdfurl}
            onChange={(e) => setBookpdfurl(e.target.value)}
          />

          <label>Book Description</label>
          <textarea
            placeholder="Book Description"
            value={bookdescription}
            onChange={(e) => setBookdescription(e.target.value)}
            minLength="140"
            maxlength="140"
          ></textarea>

          <button
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          >
            Upload Book
          </button>
        </form>
      </div>
  );
};

export default Upload;
