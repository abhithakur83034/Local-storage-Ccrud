import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Show(){
    const [data,SetData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        let userData = JSON.parse(window.localStorage.getItem('data'));
        // console.log(userData)

        SetData(userData)
    },[])

    let hDel=(index)=>{
        let userData=JSON.parse(window.localStorage.getItem('data')) || []
        userData.splice(index,1)
        window.localStorage.setItem('data',JSON.stringify(userData))
        window.location.reload()
    }

    let hEdit=(index)=>{
        navigate('/edit/'+index)
    }


    return(
        <>
          <table className="table table-borderd">
            <tr>
                <th>I'd</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
            {data.map((data,index)=>{
                return(

                    <tr key={index} >
                    <td> {data.id} </td>
                    <td> {data.name} </td>
                    <td> {data.email} </td>
                    <td> {data.mobile} </td>
                    <td> {data.password} </td>
                    <td className="btn btn-outline-info"
                    onClick={()=>{hEdit(index)}} >Edit</td>
                    <td className="btn btn-outline-primary"
                     onClick={()=>{hDel(index)}}>Delete</td>
                </tr>
                    )
            })}

          </table>
        </>
    )
}