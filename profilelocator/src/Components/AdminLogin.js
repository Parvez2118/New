import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function AdminLogin() {
    const navigate =useNavigate();
    const [email , Setemail]= useState('');
    const [password , SetPassword]= useState('');
 
    const PostData= async (e) => {
        e.preventDefault();
        
        const res = await fetch("http://localhost:8000/Loginadmin", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
               email, password
            })
 
        });
    
        const data= await res.json();
        console.log(data);
        if(res.status===400|| res.status===422 || !data)
        {
            window.alert("Login failed");
        }
        else
        {
          window.alert("Logged In Sucessfully");
              navigate("/dashboard");
        }
    }
    return(
        <>
       

<section class="vh-100">
  <div class="container-fluid h-custom" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form method='POST'>
<div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mt-4 me-3" style={{margin:0}}>Sign in with</p>
            <button type="button" class="btn btn-light btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-light btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>
<button type="button" class="btn btn-light btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
<div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Enter Email address </label>  
                    <input type="email" class="form-control form-control-sm hi"  id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" value={email} onChange={(e)=>Setemail(e.target.value)} required name="email" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Enter Password </label>  
                    <input type="password" class="form-control form-control-sm hi" id="exampleInputPassword1" autoComplete="off" value={password} onChange={(e)=>SetPassword(e.target.value)} required name="password" />  
          </div>  
                <br/>
<div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
</div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-light btn-outline-secondary btn-block btt" onClick={PostData}> Sign in </button>
</form>
      </div>
    </div>
  </div>
 
 
</section>
</>
    )
}

export default AdminLogin