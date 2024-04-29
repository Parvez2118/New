
import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom'
import Header from '../Header';
import axios from 'axios';
function EditProfile() {
  const Navigate = useNavigate();
  const [userRegistration, SetRegistration] = useState({
    name: "",
    email: "",
    MobileNumber: "",
    Age: "",
    Occupation: "",
    Address: "",
    description: "",
    profilepic:""
  });
  const location = useLocation();
  const { data } = location.state;
  const navigate= useNavigate();

 
  const handelinput = (e) => {
    const n = e.target.name;
    const v = e.target.value;
    SetRegistration({ ...userRegistration, [n]: v });
    console.log(userRegistration);
  }



  const updateuserdata= (e)=>{
    try{
        console.log(data._id,data);
         e.preventDefault();
       let response=  axios.post("http://localhost:8000/userr",userRegistration).then((res)=>{
        console.log(res.status,res);
        if(res.status==200)
        {
         window.alert("Profile Editted");
         console.log(response);
         Navigate('/dashboard');
        }
       });
       
      
      
     }
     catch(err){
       console.log("error whilw calling getuserid");
     }
 }
  useEffect(() => {
    
    if (location.state && location.state.data) {
      SetRegistration(location.state.data);
    }
  }, [location.state]);
 
  return (
    <>
        
      <section class="vh-100 bg-image"
        style={{ height: 50 + "%", backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <div class="mask d-flex align-items-center h-auto gradient-custom-3">
          <div class="container h-20" >
            <div class="row d-flex justify-content-center align-items-center " >
              <div class="col-3 col-md-0 col-lg-4 col-xl-6">
                <div class="card" style={{ borderRadius: 15 + "px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-0">Edit Profile</h2>

                    <form method='POST'>
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="para"> Name </label>
                        <input  placeholder="Enter Name" type="=text" class="form-control form-control-sm hi" id="exampleInputEmail1" value={userRegistration.name} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp" required name="name" />
                      </div>
                  
                      <div class="form-group">
                        <label for="exampleInputPassword1" class="para"> Email </label>
                        <input  placeholder="Enter email" type="email" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.email} onChange={handelinput} autoComplete="off" required name="email" />
                      </div>
                     

                      <div class="form-group">
                        <label for="exampleInputEmail1" class="para"> Mobile Number </label>
                        <input  placeholder="Enter contact number" type="Number" class="form-control form-control-sm hi" id="exampleInputEmail1" value={userRegistration.MobileNumber} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp" required name="MobileNumber" />
                      </div>
                     

                      <div class="form-group">
                        <label for="exampleInputEmail1" class="para"> Age</label>
                        <input  placeholder="Enter Age" type="Number" class="form-control form-control-sm hi" id="exampleInputEmail1" value={userRegistration.Age} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp" required name="Age" />
                      </div>

                      <div class="form-group">
                        <label for="exampleInputEmail1" class="para">Occupation </label>
                        <input  placeholder="Enter Occupation" type="text" class="form-control form-control-sm hi" id="exampleInputEmail1" value={userRegistration.Occupation} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp" required name="Occupation" />
                      </div>
                  
                      <div class="form-group">
                        <label for="exampleInputPassword1" class="para">Address </label>
                        <textarea  placeholder="Enter Address" type="text" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.Address} onChange={handelinput} autoComplete="off" required name="Address" />
                      </div>
                 
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="para">Description</label>
                        <input  placeholder="Enter Description" type="textArea" class="form-control form-control-sm hi" id="exampleInputEmail1" value={userRegistration.description} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp" required name="description" />
                      </div>
              
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="para">User Image</label>
                        <input type="text" value={userRegistration.profile} class="form-control form-control-sm hi" disabled required  />
                      </div>
                      <br />

                      <center> <button type="submit" class="btn bttt gradient-custom-4" onClick={updateuserdata}> Enter </button> </center>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default EditProfile;
