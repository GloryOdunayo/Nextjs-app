import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    let url = "/api/signup"
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const signup=()=>{
        let data = {firstname,lastname,email,password}
        console.log(data);
        axios.post(url,data).then((result) => {
            console.log(result.data);
        }).catch((err) => {
            console.log(err.message);
        });  
    }
  return (
    <div className='container mx-auto col-6'>
        <form action="">
            <input type="text" name="firstname" id="" placeholder='Firstname' className='form-control my-2' onChange={(e)=>setfirstname(e.target.value)}/>
            <input type="text" name="lastname" id="" placeholder='Lastname' className='form-control my-2' onChange={(e)=>setlastname(e.target.value)}/>
            <input type="email" name="email" id="" placeholder='email' className='form-control my-2' onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" name="password" id="" placeholder='password' className='form-control my-2' onChange={(e)=>setpassword(e.target.value)}/>
            <button type='submit' className='btn btn-info' onClick={signup}>Submit</button>
        </form>
    </div>
  )
}

export default Signup