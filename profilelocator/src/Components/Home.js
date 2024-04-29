import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
import Header from './Header';

import { Link } from 'react-router-dom';

export default function Home() {
    var imgg= "http://localhost:8000/public/images/"
    const [user, setuser] = useState([]);
    const handle = async () => {

        const response = await axios.get("https://dummyjson.com/users");
        setuser(response.data.users);
        console.log(response)
    
      }
      const [users, setUsers] = useState([]);
  
      async function login(){
    
        const response = await fetch('http://localhost:8000/vals', {
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
         
        });
        const data = await response.json();
        setUsers(data);
        console.log(data);
        // return data;
      }
      useEffect(() => {
        handle(); 
        login();    
      }, [])
  return (
    <div>
        <Header></Header>
<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>
 
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div class="carousel-inner">

    <div class="carousel-item active" >
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" style={{height:"500px"}} class="d-block w-100" alt="Sunset Over the City"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Adventure</h5>
        <p>Map Your World with Precision!</p>
      </div>
    </div>

  
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"  style={{height:"500px"}} class="d-block w-100" alt="Canyon at Nigh"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Discover</h5>
        <p>Navigate with Confidence!</p>
      </div>
    </div>

   
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"   style={{height:"500px"}} class="d-block w-100" alt="Cliff Above a Stormy Sea"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Confidence</h5>
        <p>From Street to Street, We've Got You Covered!</p>
      </div>
    </div>
  </div>
 
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div style={{paddingLeft:"25px", paddingRight:"25px"}}>
<center>
<div class="card">
<center>
  <div class="card-body un">
   <h2><span>Recent Profile</span></h2>
  </div>
  </center>
</div>
</center>





<div style={{marginTop:"20px"}} class="row  row-cols-md-5 g-4">

{users.map((post) => (
   <div class="col">
   <div class="card h-100 hov"  style={{ border:"2px solid lightgrey"}}>
     {/* <img   src="https://c1.staticflickr.com/7/6178/6140989632_1c8066563d_b.jpg" class="card-img-top" /> */}
     <img style={{height:"190px" }} src=  {`${imgg}${post.profile}`}></img>
     <div class="card-body ">
       <h5 class="card-title">{post.name}</h5>
       <p class="card-text"><b>Contact:</b>{post.MobileNumber}  </p>
       <p class="card-text"><b>Email:</b>{post.email}  </p>
       <p class="card-text"><b>Address:</b>{post.Address}  </p>
     </div>
    <Link to="/profilesummary" state={{ name: post}} > <a href="#!" style={{width:"100%"}} class="btn btn-primary"  data-mdb-ripple-init>Summary</a></Link>
   </div>
 </div>


    ))}

</div>
       
  
</div>
    </div>
  )
}
