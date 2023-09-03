import './App.css';
import {Routes,Route} from 'react-router-dom'
import Homepage from './Login components/homepage/homepage';
import Login from './Login components/login/login';
import Register from './Login components/register/register';
import axios from 'axios'
import {Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Toaster position='bottom-right' toastOptions={{duration:2000}} />
       <Routes>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/register' element ={<Register/>}/>
        <Route path ='/' element ={<Homepage/>}/>

       </Routes>
        {/* <Register/> */}
    </div>
  );
}

export default App;
