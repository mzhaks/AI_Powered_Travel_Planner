import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container1">

                <div className="login-page">
                    <h1 >WELCOME</h1>

                    <div className='user'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />


                        </svg>
                        <input className='loginbox'
                            type="text" placeholder='username'

                        //   value={username}
                        //   onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <form action="">

                        <div className='password' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>

                            <input className='loginbox'
                                type="password" placeholder='password'
                            //   value={password}
                            //   onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="eye">


                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1788f9" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className="remember" id='forget'>
                            <label><input type='checkbox' />Remember me</label>
                            <a href='#'>Forgot Password</a>
                        </div>
<div className="loginbutton">

                   <button type='submit' className='btn btn-primary'>Login</button>
</div>

                        <div className="register">
                            <p>Don't have an account? <a href='#'>Register</a></p>
                        </div>
                    </form>
                </div>


                <div className="image-container">

                    <a><img className="imm" src="./images/p4.png" alt="Tourist" /></a>

                </div>
            </div>
            <div className="wave">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1788f9" fill-opacity="0.7" d="M0,64L30,80C60,96,120,128,180,133.3C240,139,300,117,360,144C420,171,480,245,540,266.7C600,288,660,256,720,234.7C780,213,840,203,900,197.3C960,192,1020,192,1080,186.7C1140,181,1200,171,1260,149.3C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default Login