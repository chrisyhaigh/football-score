import React from "react";
import '../css/Navbar.css'

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div className="logo-container">
                    <img className="logo-image" width="60" src="src\images\image_processing20200410-18222-12ilqee.png"></img>
                </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">PREMIER LEAGUE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BUNDESLIGA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LIGUE 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LA LIGA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">EREDIVISIE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SERIE A</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;