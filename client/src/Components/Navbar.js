import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../styling/Navbar.css";
export default function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const handleLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "black", height: "6rem" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: "white", fontSize: "2rem", marginLeft: "-6rem" }}>
          <img src="../images/logoRH.jpg" style={{width:"11rem"}}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/all-reviews"
                style={{ textDecoration: "bold", fontSize: "1.3rem", marginLeft: "3rem" }}
              >
                All Reviews
              </Link>
            </li>
            {!cookies.access_token ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/auth"
                  style={{ textDecoration: "bold", fontSize: "1.3rem", marginLeft: "1.5rem" }}
                >
                  Login/Sign Up
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/saved-reviews"
                    style={{ textDecoration: "bold", fontSize: "1.3rem", marginLeft: "1.5rem" }}
                  >
                    Saved Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/create-review"
                    style={{ textDecoration: "bold", fontSize: "1.3rem", marginLeft: "1.5rem" }}
                  >
                    Create Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/auth"
                    style={{ textDecoration: "bold", fontSize: "1.3rem", marginLeft: "1.5rem" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}

          </ul>
          <form
            className="form-inline"
            style={{ display: "flex", marginLeft: "auto" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit" style={{marginLeft:"1rem"}}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
