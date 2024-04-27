import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
          <Link to="/adlogin"><a class="nav-link" href="#">Admin Login</a></Link>
        </li>
        
      </ul>
     
    </div>
   

   
  </div>
 
</nav>
    </div>
  )
}

export default Header