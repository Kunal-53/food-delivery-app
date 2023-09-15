import React, { useState } from 'react'
import {  Link , useNavigate} from 'react-router-dom'
export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
          //save the auth toke to local storage and redirect
         
         alert("enter valid credential")
    
        }
        
      }
      
      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

  return (
    <div>
        <div className='container'>
    <form  onSubmit={handleSubmit}>
    <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name' value={credentials.name} onChange={onChange}/>

</div>

  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name='email' value={credentials.email} onChange={onChange}/>
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" value={credentials.password} onChange={onChange} name='password'/>
  </div>

  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
  <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
</form>
</div>
    </div>
  )
}
