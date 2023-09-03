import React, {useState} from 'react';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
import "./login.css";

const Login = () => {
    const navigate = useNavigate()
    const[ user, setUser]= useState({
        
        email:"",
        password:"",
       
    })
    // const handleChnage= e =>{
    //     const {name,value}=e.target;
    //     setUser({
    //         ...user,
    //         [name]:value
    //     })
    //     axios.get('/')
    // }
    const loginuser = async (e) => {
        e.preventDefault();
        const { email, password } = user; // Access the user data from state
        try {
          const response = await axios.post('/login', {
            email,
            password
          });
          if (response.data.error) {
            toast.error(response.data.error);
          } else {
            setUser({});
            toast.success('Login successful. Welcome!');
            // console.log('Before navigation');
            navigate('/');
            // console.log('After navigation');
          }
        } catch (error) {
          console.error(error);
        }
      };
      
    return (  
        
        <div className="login">
            <form onSubmit={loginuser}>
            <h1>Login</h1>
            <input type="text" name="email" value={user.email}placeholder="Enter your email" onChange={(e) => setUser({...user,email:e.target.value})}/>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={(e) => setUser({...user,password:e.target.value})} />
            <button type='submit'>Login</button>
            <div>or</div>
            <div className="button">Register</div>
            </form>
        </div>
    );
}

export default Login;
