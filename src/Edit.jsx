import React, {useEffect, useState } from "react";
import {useParams,useNavigate} from 'react-router-dom';

export default function Edit(){
    const navigate = useNavigate()
    const {index} = useParams()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')

    
    useEffect(()=>{
        let userData = JSON.parse(window.localStorage.getItem('data'));
        // console.log(userData)
            setName(userData[index].name)
            setEmail(userData[index].email)
            setMobile(userData[index].mobile)
            setPassword(userData[index].password)
        
    },[])

    let hSubmit=(e)=>{
        e.preventDefault()
        
        let userData = JSON.parse(window.localStorage.getItem('data'));
        userData[index].name = name
        userData[index].email = email
        userData[index].mobile = mobile
        userData[index].password = password

        window.localStorage.setItem('data',JSON.stringify(userData))

       navigate('/Show')
    }
    return(
        <>
            <div className="container">
            <div className="row">
                <div className="col-sm-4 bg-white"></div>
                <div className="col-sm-4 bg-light">

                    <h2>Update Data</h2>

                    <form onSubmit={hSubmit}>
                        <label>NAME</label>
                        <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} />
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                        <label>Mobile</label>
                        <input type="number" className="form-control" onChange={(e)=>{setMobile(e.target.value)}} value={mobile} />
                       <label>Password</label>
                       <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
                        <br /> <input type="submit"  value="UPDATE" className="btn btn-outline-info" />
                    </form>

                </div>
                <div className="col-sm-4 bg-white"></div>
            </div>
          </div>
        </>
    )
}