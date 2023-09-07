import React from 'react'

const Navbar = () => {
    return (
        <>
            <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li className="nav-item px-4">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" aria-current="page" href="#">Service</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                            <button className="btn btn-outline-danger px-3 mx-4 " type="submit">Log in</button>
                            <button type="button" className="btn btn-primary px-5 " >Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
            
         
                <div className="container">

                </div>
                <div className="image-container">
                
           <a><img className="imm" src="./images/tt1.WEBP" alt="Tourist"/></a>
             
                </div>
                    

        
        
                <div className="text">
                    <p className="text1">Trip.com</p>
                    <p className="text2">START YOUR NEW</p>
                    <p className="text3">HOLIDAY</p>
                </div>
              
                <div className="cc">

<div className="box">

  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#eba721d9" className="bi bi-house-heart-fill"
    viewBox="0 0 16 16">
    <path
      d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
    <path
      d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
  </svg>
  <div className="card-body" id="card">
    <h5 className="card-title">HOTEL BOOKING</h5>
    <p className="card-text">Easily to booking Hotels</p>
    
  </div>
</div>


<div className="box">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#84b8ee" className="bi bi-ticket-detailed-fill"
    viewBox="0 0 16 16">
    <path
      d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z" />
  </svg>
  <div className="card-body" id="card">
    <h5 className="card-title">TICKET BOOKING</h5>
    <p className="card-text">Easily to booking Tickets</p>
    
  </div>
</div>


<div className="box">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#72e650" className="bi bi-airplane-engines"
    viewBox="0 0 16 16">
    <path
      d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
  </svg>

  <div className="card-body" id="card">
    <h5 className="card-title">TOUR PLAN SERVICE</h5>
    <p className="card-text">Easier for you to plan a trip</p>
    
  </div>
</div>
</div>
            </div>

        </>

    )
}

export default Navbar