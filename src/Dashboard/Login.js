import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import '../Dashboard/css/Login.css';
import Dashboard from './Dashboard';
  
const Login = () => {

    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
          const user = {
            uid: userAuth?.uid,
            email: userAuth?.email
          }
          if (userAuth) {
            clearInputs();
            setUser(user)
          } else {
            setUser(null)
          }
        })
        return unsubscribe
      }, [])

    return (
        <>
            {user ? ( <Dashboard /> ) : (
                <div className="container-login">
                    <form className="form-login" onSubmit={handleLogin}>
                        <label>Username</label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        <label>Password</label>
                            <input 
                                type="password"
                                autoFocus
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        <button>Sign In</button>
                    </form>
                </div>
            )}
        </>
  
    )
}
  
export default Login;