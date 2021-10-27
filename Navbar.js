import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">
            {props.aboutText}
          </a>
          <a class="nav-item nav-link" href="#">
            Pricing
          </a>
          <a class="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

// Navbar.PropTypes = { title: PropTypes.string.isRequired,
//    aboutText: PropTypes.string 
//   }

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText:"About text here"
// };
