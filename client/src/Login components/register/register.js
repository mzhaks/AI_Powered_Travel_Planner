import React, {useState} from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import "./register.css"
const Register = () => {
    const navigate = useNavigate()
    const[ data, setData]= useState({
        name:"",
        email:"",
        password:"",
        // reEnterPassword: ""
    })
    // const handleChnage= e =>{
    //     const {name,value}=e.target;
    //     setData({
    //         ...data,
    //         [name]:value
    //     })
    // }
    const registerUser = async(e)=>{
        e.preventDefault();
        const {name,email,password}=data
        try {
            const {data}= await axios.post('/register',{
                name,email,password
            })
            console.log(data);
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Login successful . Welcome!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (  
        <div className="register">
            <form onSubmit={registerUser}>
            <h1>Register</h1>
            <input type="text" name="name" value={data.name} placeholder="Enter your name" onChange={(e) => setData({...data,name:e.target.value})}/>
            <input type="text" name="email" value={data.email} placeholder="Enter your email"onChange={(e) => setData({...data,email:e.target.value})}/>
            <input type="password" name="password" value={data.password} placeholder="Enter your password" onChange={(e) => setData({...data,password:e.target.value})}/>
            {/* <input type="password" name="reEnterPassword" value={data.reEnterPassword} placeholder="RE-Enter your password" onChange={handleChnage}/> */}
            <button type='submit'>submit</button>
            <div>or</div>
            <div className="button">Login</div>
            </form>
        </div>
    );
}
 
export default Register;


