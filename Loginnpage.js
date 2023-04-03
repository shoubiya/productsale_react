import axios from "axios";
import "./Loginnpage.css";
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import  {useState,useEffect} from 'react';

export default function Loginnpage() {
    const Navigate=useNavigate();
    const [state,setInputs]=useState(  {
      username:"",
      password:""
    });
    
    const setRegister=(event)=>{
      const username=event.target.name;
      const password=event.target.value;
      setInputs({...state,[username]:password});
      console.log(state);
    }
    const Register=(e)=>{
    e.preventDefault();
    console.log(state);
     
    axios.post(`https://fakestoreapi.com/auth/login`,state).then(response=>{
        console.log("response====>",response);
        Navigate('/')
      
    })
  .catch((err)=>{
    console.log(err.response.data)
    if(err){
        toast.success(err.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
  })
}

  return (
    <div>
        <div>
        <title>Login Form</title>    
        <link rel="stylesheet" type="text/css" href="css/style.css" />    
        <h2>Login Page</h2><br />    
        <div className="loginpage">    
          <form id="login" method="get" action="login.php">    
            <label><b>User Name     
              </b>    
            </label>    
            <input type="text" name="username" id="Uname" placeholder="Username" onChange={setRegister} />    
            <br /><br />    
            <label><b>Password     
              </b>    
            </label>    
            <input type="Password" name="password" id="Pass" placeholder="Password" onChange={setRegister}/>    
            <br /><br />    
            <input type="button" name="log" id="log" defaultValue="Log In Here" onClick={Register} />       
            {/* <br /><br />    
            <label><b>Not Registered?</b></label>
            <br/><br/>
              <span><Link to={'/Registerationform'}>create an account</Link></span>
            <br /><br />    
            <a href="#"> Forgot Password?</a>     */}
          </form>     
        </div> 
         <ToastContainer/>  
      </div>
    </div>
  )
}

