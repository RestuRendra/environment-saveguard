import React, {useState} from "react";
import "./../index.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const tokenKey = 'token';
const userKey = 'user';

const Signin = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('')
    const navigate = useNavigate();

    const Auth = async(e) => {
        e.preventDefault();
        console.log('masok')
        try {
            const res = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });

            const token = res?.data?.accessToken;
            if (!token) throw Error('Terjadi Kesalahan, token tidak ditemukan');
            const user = res?.data?.user;
            if (!user) throw Error('Terjadi Kesalahan, user tidak ditemukan');
            
            localStorage.setItem(tokenKey, token)
            localStorage.setItem(userKey, JSON.stringify(user))


            navigate("/profil");
        } catch (error) {
          console.log(error)
          if (error.response){
              setMsg(error.response.data.msg);
          }
        }
    }

  return (
    <>
      <section id="signin">
        <div className="container">
          <div className="container-form">
            <form onSubmit={Auth}>
              <p className='has-text-centered'>{msg}</p>
              <div className="biodata">
                <h1>Welcome Back</h1>
                <h4>Register your account</h4>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>

              </div>
              <button>Signin</button>

              <div className="remfp">
                <div className="checkbox">
                  <input type="checkbox" id="hobi1" name="hobi" value="membaca" />
                  <label htmlFor="hobi1">Remember Me</label>
                  <br />
                </div>
                <Link to="/forgot">Forgot Password?</Link>
              </div>

              <div className="signup">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign up</Link>
              </div>
            </form>
            <div className="welcome">
              <h1>Hello Guardians!</h1>
            </div>
            <div className="gambar">
              <img src="Gambar 1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
