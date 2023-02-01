import { useState } from "react";
import React from "react"
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ()=>{

    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()
    const handleLogin = (e)=>{
        if(userName === "abhilash_44" && password==="anil6202"){
            //In router v5 they have disposed the usage of history.push 
            navigate("/HomePage",{
                state:{
                    name:"Abhilash"
                }
            })
        }
    }

    const changeTextbox = (e)=>{
       if(e.target.name === "username"){
        setUsername(e.target.value)
       }else if(e.target.name === "password"){
         setPassword(e.target.value)
       }
    }

    return(
    <div style={{display:"flex",flexDirection:"column",width:"10%" ,justifyContent:"center"}}>
     <div style={{marginBottom:"10px"}}>
       <label>UserName</label>
       <input name="username" value={userName} onChange={changeTextbox} type="text"/>
       <label>Password</label>
       <input name="password" value={password} onChange={changeTextbox}  type="password"/>
    </div>
       <button onClick={handleLogin}>submit</button>
       <p>Are you a new user ?</p>
     <button><Link to="/registrationPage">New User?</Link></button>
    </div>
    )
}
export default LoginPage