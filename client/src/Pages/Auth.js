import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  return (
    <div className="auth">
      <div className="row">
        <div className="col-md-6 mt-5">
          <Login />
        </div>
        <div className="col-md-6 mt-5">
          <Register />
        </div>
      </div>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      const data = response.data;
      if (data.message === "User Doesn't Exist") {
        alert("User Doesn't Exist");
      } else {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="container custom-form"
      style={{ maxWidth: "40rem" }}
      onSubmit={handleSubmit}

    >
     
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label text-black fs-4"
          style={{marginLeft:"-22rem"}}
        >
          Email address :
        </label>
        <input
          type="email"
          value={username}
          className="form-control custom-input"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="zaemon@gmail.com"
        />
      </div>
      <div className="mb-3" style={{ marginTop: "3rem" }}>
        <label
          htmlFor="exampleInputPassword1"
          className="form-label text-black fs-4"
          style={{marginLeft:"-25.5rem"}}
        >
          Password :
        </label>
        <input
          type="password"
          value={password}
          className="form-control custom-input"
          id="exampleInputPassword1"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="#@zaemon123**"
        />
      </div>
      <button type="submit" className="btn btn-primary custom-button" style={{marginTop:"2rem",marginLeft:"-26.5rem"}}>
        Sign In
      </button>
    </form>
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username: username,
        password: password,
      });
      const data = response.data;
      if (data.message === "User Already Exists") {
        alert("User Already Exists");
      } else if (data.message === "User Created Successfully") {
        alert("Registration Completed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="container custom-form"
      style={{ maxWidth: "40rem" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label text-black fs-4"
          style={{marginLeft:"-22rem"}}
        >
          Email address :
        </label>
        <input
          type="email"
          value={username}
          className="form-control custom-input"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="zaemon@gmail.com"
        />
      </div>
      <div className="mb-3" style={{ marginTop: "3rem" }}>
        <label
          htmlFor="exampleInputPassword1"
          className="form-label text-black fs-4"
          style={{marginLeft:"-25.5rem"}}
        >
          Password :
        </label>
        <input
          type="password"
          value={password}
          className="form-control custom-input"
          id="exampleInputPassword1"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="#@zaemon123**"
        />
      </div>
      <button type="submit" className="btn btn-primary custom-button" style={{marginTop:"2rem",marginLeft:"-26.5rem"}}>
        Sign Up
      </button>
    </form>
  );
}
