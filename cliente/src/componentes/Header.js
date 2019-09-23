import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to={"/"}>
        Miguel Atencia
      </Link>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <form className="form-inline col-6  mr-5"></form>
        <ul className="navbar-nav">
          <li className="nav-item mr-3 ">
            <Link className="nav-link" to={"/album/new"}>
              <i className="fas mr-2 fa-plus"></i>
              Crearte Album
            </Link>
          </li>
          <li className="nav-item mr-3">
            <Link className="nav-link" to={"/photo/new"}>
              <i className="fas mr-2 fa-upload"></i>
              Upload Photo
            </Link>
          </li>

          <li className="nav-item mr-3 d-block d-sm-none">
            <Link className="nav-link" to={"/"}>
              <i className="fas mr-2 fa-image "></i>
              Photos
            </Link>
          </li>

          <li className="nav-item mr-3 d-block d-sm-none">
            <Link className="nav-link" to={"/albums"}>
              <i className="fas mr-2 fa-images"></i>
              Albums
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
