import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
import Header from './Header';
export default function Home() {
    const [user, setuser] = useState([]);
    const handle = async () => {

        const response = await axios.get("https://dummyjson.com/users");
        setuser(response.data.users);
        console.log(response)
    
      }
      useEffect(() => {
        handle();     
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
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

  
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"  style={{height:"500px"}} class="d-block w-100" alt="Canyon at Nigh"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

   
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"   style={{height:"500px"}} class="d-block w-100" alt="Cliff Above a Stormy Sea"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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



<div class="row row-cols-1 row-cols-md-4 g-4">

    {user.map((post) => (
       <div class="col">
       <div class="card h-100 hov"  style={{ border:"2px solid grey "}}>
         <img  style={{height:"300px"}} src={post.image} class="card-img-top" />
         <div class="card-body">
           <h5 class="card-title">{post.firstName}  {post.lastName}</h5>
           <p class="card-text">
             This is a longer card with supporting text below as a natural lead-in to
             additional content. This content is a little bit longer.
           </p>
           <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
         </div>
       </div>
     </div>
   

        ))}
 
</div>


       
  
</div>
    </div>
  )
}
