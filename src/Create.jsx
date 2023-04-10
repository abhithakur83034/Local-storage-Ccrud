import React, { useState } from "react";

export default function Create(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')


    let hSubmit=(e)=>{
        e.preventDefault()
        
        let userData = JSON.parse(window.localStorage.getItem('data')) || [];


        let id = 1;
        if(userData.length == 0){
            let newObj = {id,name,email,mobile,password}
            userData.push(newObj)    
            window.localStorage.setItem('data',JSON.stringify(userData))    
        }else{
                let index = userData.length -1
                id = userData[index].id +1
                // console.log(id)
                let newObj = {id,name,email,mobile,password}
                userData.push(newObj)        
                window.localStorage.setItem('data',JSON.stringify(userData))
        }        
        setName('')
        setEmail('')
        setMobile('')
        setPassword('')
    }
    return(
        <>
          <div className="container">
            <div className="row">
                <div className="col-sm-4 bg-white"></div>
                <div className="col-sm-4 bg-light">

                    <h2>Emp Data</h2>

                    <form onSubmit={hSubmit}>
                        <label>NAME</label>
                        <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} />
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                        <label>Mobile</label>
                        <input type="number" className="form-control" onChange={(e)=>{setMobile(e.target.value)}} value={mobile} />
                       <label>Password</label>
                       <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
                        <br /> <input type="submit"  value="SAVE" className="btn btn-outline-info" />
                    </form>

                </div>
                <div className="col-sm-4 bg-white"></div>
            </div>
          </div>
        </>
    )
}