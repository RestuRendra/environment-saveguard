import React, {useState} from "react";
import "./../index.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setconfPassword] = useState('');
    const [msg, setMsg] = useState('')
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/signin");
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section id="signup">
            <div className="container">
            <div className="container-form">
                <div className="welcome">
                <h1>Welcome to Environment Website</h1>
                </div>
                <div className="gambar">
                <img src="Gambar 1.png" alt="" />
                </div>
                <form onSubmit={ Register }>
                    <p>{msg}</p>
                <div className="biodata">
                    <h1>Create Account</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Your Name" className='input' value={name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" value={confPassword} onChange={(e) => setconfPassword(e.target.value)}/>
                </div>
                <button>Signup</button>

                <div className="signin">
                    <p>Already have an account?</p>
                    <Link to="/signin">Sign in</Link>
                </div>
                </form>
            </div>
            </div>
        </section>
    );
}

export default SignUp;