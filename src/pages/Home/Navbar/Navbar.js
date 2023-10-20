import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-menue">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Apply Online</a>
                <button className="navbar-toggler toggleButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nab-option" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link fw-bold navActive" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Academic</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Admission</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Research</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Campus</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">News & Updates</a>
                    </li>
                    <li className="nav-item d-none">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Contacts</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link fw-bold" aria-current="page" href="#">Contacts</a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                  </ul>
                  {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
          </nav>
        </div>
    );
};

export default Navbar;