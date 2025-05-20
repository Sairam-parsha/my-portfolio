import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




function Navbar(){
    return(
        <section id="contact">
        <nav class="navbar navbar-expand-lg navbar-light bg-black">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><Link to="/">MyPORTFOLIO</Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/">Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/about">About</Link></a>
              </li><li class="nav-item">
                <a class="nav-link" href="#"><Link to="/projects">Projects</Link></a>
              </li><li class="nav-item">
                <a class="nav-link" href="#"><Link to="/skills">Skills</Link></a>
              </li><li class="nav-item">
                <a class="nav-link" href="#"><Link to="contact" smooth={true} duration={500}>Contact</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </section>
    )
}

export default Navbar;

