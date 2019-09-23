import React from "react";
import { Link } from "react-router-dom";

const Lateral = () => {
  return (
    <ul className="nav flex-column text-center mt-4">
      <li className="nav-item mt-4">
        <Link className="nav-link active contlat" to={"/"}>
          <i className="fas fa-image d-block"></i>
          Photos
        </Link>
      </li>
      <li className="nav-item mt-4 ">
        <Link className="nav-link contlat" to={"/albums"}>
          <i className="fas fa-images d-block"></i>
          Albums
        </Link>
      </li>
    </ul>
  );
};

export default Lateral;
