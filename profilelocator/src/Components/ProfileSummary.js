import React from 'react'
import { useEffect, useState } from "react";
import Header from './Header'
import { useLocation ,Link } from 'react-router-dom'



function ProfileSummary() {
    const [users, setUsers] = useState([]);
    var imgg= "http://localhost:8000/public/images/"
    const zoom = 100;
    const location = useLocation()
    const { name } = location.state
    console.log(name);
    let address =name.Address;

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  
  <div class="container-fluid">
   
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="Logo2.png"
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/"><a class="nav-link" href="#">Home</a></Link>
        </li>
        
      </ul>
     
    </div>
   

   
  </div>
 
</nav>
       
<section style= {{backgroundColor:"#eee"}} >
  <div class="container py-3">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">    
            <li class="breadcrumb-item active" aria-current="page"><h3>Profile</h3></li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src= {`${imgg}${name.profile}`} alt="avatar"
              class="rounded-circle img-fluid" style={{width:"150px"}} />
            <h4 class="my-3">{name.name}</h4>
            <h5 class="text-muted mb-1">{name.Occupation}</h5>
            <p class="text-muted mb-4">{name.description}</p>
  
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <p class="mb-0">{name.Address}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
              <i class="fa fa-phone-square fa-lg" aria-hidden="true"></i>
                <p class="mb-0">{name.MobileNumber}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
              <i class="fa fa-envelope fa-lg" style={{color: "#ac2bac"}} aria-hidden="true"></i>
                <p class="mb-0">{name.email}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
       
            <iframe
                width="800"
                height="500"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?q=${address}&t=&zoom=${zoom}&maptype=roadmap&ie=UTF8&iwloc=&output=embed`}
                title="google map"
            ></iframe>
      
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default ProfileSummary