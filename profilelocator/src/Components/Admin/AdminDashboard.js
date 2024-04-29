
import React, { useState, useEffect } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaMoneyBill } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
import { FiYoutube, FiMail } from "react-icons/fi";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import "./Admin.css";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });


function AdminDashboard() {
  var imgg= "http://localhost:8000/public/images/"
  
  const Navigate = useNavigate();
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

    const deleteuser = async (userId) => {
      try {
        const response = await axios.delete('/delete', {
          data: {
            userId,
          },
        });
        console.log('User deleted:', response.data);
        Window.alert("User Deleted Sucessfully");

      } catch (error) {
        console.error('Error deleting User:', error);
      }
    };
    const Edituser=(user)=>{
      // deleteuser(user._id);
      Navigate('/edit', { state: { data: user } });
    }
   
useEffect(()=>{
   login();
},[users])
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
   
      <a class="navbar-brand mt-2 mt-lg-0">
        <img
          src="Logo2.png"
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/dashboard"><a class="nav-link" href="#">Dashboard</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/AddProfile"><a class="nav-link" href="#">Add Profile</a></Link>
        </li>
        
      </ul>
      
      <div class="d-flex align-items-center">   
        <Link to="/"><button data-mdb-ripple-init type="button" class="btn btn-light">
          Logout
        </button></Link>
      </div>
    












    </div>
  </div>
 
</nav>

<nav style={{marginTop:"30px"}} aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">    
            <li class="breadcrumb-item active" aria-current="page"><h3>All Profiles</h3></li>
          </ol>
        </nav>

<div  class="row row-cols-1 row-cols-md-5 g-4">

{users.map((post) => (
  <div>
   <div class="col">
   <div class="card h-100 hov"  style={{ border:"2px solid lightgrey "}}>
     {/* <img  style={{height:"100px" ,width:"150px"}} src="https://c1.staticflickr.com/7/6178/6140989632_1c8066563d_b.jpg" class="card-img-top" /> */}
     <img style={{height:"200px" }} src=  {`${imgg}${post.profile}`}></img>
     <div class="card-body">
       <h5 class="card-title">{post.name}</h5>
       <p class="card-text"><b>Contact:</b>{post.MobileNumber}  </p>
       <p class="card-text"><b>Email:</b>{post.email}  </p>
       <p class="card-text"><b>Address:</b>{post.Address}  </p>
     </div>
  
     <div className="d-flex">
     <a   onClick={() => Edituser(post)} style={{width:"50%"}} class="btn btn-info"  data-mdb-ripple-init> <FaEdit/>Edit</a>
     <a  onClick={() => deleteuser(post._id)} style={{width:"50%"}} class="btn btn-danger"  data-mdb-ripple-init> <MdDelete />Delete</a>
      
    </div>
   </div>
 </div>

 
  </div>


    ))}

</div>

    </div>
  )
}

export default AdminDashboard