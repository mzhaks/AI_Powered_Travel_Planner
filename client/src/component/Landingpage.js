import React from 'react'

const Landingpage = () => {
    return (
        <>
        <div className="head2" id='header2'>
            <div className="container2">
                <div className="image-container">

                    <a><img className="imm" src="./images/p1.png" alt="Tourist" /></a>

                </div>
                <div className="login-page">

                    <div className="signup-h1">
                        <h1 >SIGN UP</h1>

                    </div>

                    <div className='user'>
                        

                        
                        <input className='signupbox'
                            type="text" placeholder='username'

                        //   value={username}
                        //   onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='user'>
                       
                        <input className='signupbox'
                            type="email" placeholder='email-id'

                        //   value={username}
                        //   onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <form action="">

                        <div className='password' >
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg> */}

                            <input className='signupbox'
                                type="password" placeholder='password'
                            //   value={password}
                            //   onChange={(e) => setPassword(e.target.value)}
                            />

                            <input className='signupbox'
                                type="password" placeholder='confirm password'
                            //   value={password}
                            //   onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="eye1">


                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a716c1" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                            </svg>


                        </div>
                        <div className="eye2">


                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a716c1" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                            </svg>


                        </div>
                        <div className="remember" id='forget'>
                            <label><input type='checkbox' />Remember me</label>

                        </div>
                        <div className="loginbutton">

                            <button type='submit' className='btn btn-primary'>Sign Up</button>
                        </div>

                        <div className="register">
                            <p>Already have Account? <a href='#'>Sign In</a></p>
                        </div>
                    </form>
                </div>


            </div>
            <div className="wave1">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 290" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,100 0,100 C 41.99216209786144,89.36041132464511 83.98432419572288,78.72082264929023 124,81 C 164.01567580427712,83.27917735070977 202.0548653149699,98.4771207274842 261,92 C 319.9451346850301,85.5228792725158 399.79621454439723,57.370694440772965 458,65 C 516.2037854556028,72.62930555922703 552.7602765074414,116.04010150942398 597,122 C 641.2397234925586,127.95989849057602 693.1626794258374,96.46889952153111 731,89 C 768.8373205741626,81.53110047846889 792.5890057892092,98.08430040445161 839,103 C 885.4109942107908,107.91569959554839 954.4812974173253,101.19389886066246 1007,100 C 1059.5187025826747,98.80610113933754 1095.4858045414894,103.14010415289856 1138,110 C 1180.5141954585106,116.85989584710144 1229.5754844167172,126.24568452774326 1281,125 C 1332.4245155832828,123.75431547225674 1386.2122577916414,111.87715773612837 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,200 0,200 C 49.852784900473196,211.55922704803194 99.70556980094639,223.11845409606389 151,227 C 202.2944301990536,230.88154590393611 255.03050569668773,227.08541066377646 302,212 C 348.9694943033123,196.91458933622354 390.1724074123028,170.53990324883029 438,169 C 485.8275925876972,167.46009675116971 540.2798646541014,190.7549763409025 587,202 C 633.7201353458986,213.2450236590975 672.7081339712919,212.44019138755982 724,217 C 775.2918660287081,221.55980861244018 838.8875994607312,231.48425810885826 884,229 C 929.1124005392688,226.51574189114174 955.7414681857836,211.622776177007 997,197 C 1038.2585318142164,182.377223822993 1094.1465277961352,168.02463718311353 1141,165 C 1187.8534722038648,161.97536281688647 1225.6724206296756,170.278675090539 1274,178 C 1322.3275793703244,185.721324909461 1381.163789685162,192.86066245473052 1440,200 C 1440,200 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,300 0,300 C 49.60868645747972,285.8983319675381 99.21737291495944,271.79666393507625 150,272 C 200.78262708504056,272.20333606492375 252.73919479764197,286.71167622723306 302,284 C 351.26080520235803,281.28832377276694 397.8258478944726,261.35663115599147 437,269 C 476.1741521055274,276.64336884400853 507.9574136244679,311.8617991488012 557,330 C 606.0425863755321,348.1382008511988 672.3444976076556,349.1961722488038 724,332 C 775.6555023923444,314.8038277511962 812.6645959449098,279.3535118559836 857,285 C 901.3354040550902,290.6464881440164 952.9971186127048,337.38978032726214 999,336 C 1045.0028813872952,334.61021967273786 1085.3469296042717,285.0873668349679 1134,274 C 1182.6530703957283,262.9126331650321 1239.615162970208,290.2607523328663 1292,301 C 1344.384837029792,311.7392476671337 1392.192418514896,305.86962383356683 1440,300 C 1440,300 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,400 0,400 C 49.81506251817389,413.4017552671231 99.63012503634778,426.8035105342462 150,425 C 200.36987496365222,423.1964894657538 251.29456237278276,406.18771313013826 294,397 C 336.70543762721724,387.81228686986174 371.1916254725211,386.44563694520076 414,390 C 456.8083745274789,393.55436305479924 507.93893573713285,402.0297390890587 559,407 C 610.0610642628671,411.9702609109413 661.0526315789474,413.4354066985646 705,410 C 748.9473684210526,406.5645933014354 785.8505379470777,398.228634116683 840,388 C 894.1494620529223,377.771365883317 965.5452166327423,365.6500568347036 1022,364 C 1078.4547833672577,362.3499431652964 1119.968595521954,371.17113854450287 1167,377 C 1214.031404478046,382.82886145549713 1266.5804012794415,385.66538898728487 1313,389 C 1359.4195987205585,392.33461101271513 1399.7097993602792,396.1673055063576 1440,400 C 1440,400 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
            </div>
            </div>
        </>
    )
}

export default Landingpage