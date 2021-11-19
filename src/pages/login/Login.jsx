import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { actionLogin } from "../../services/auth";

function Login() {
  const [isConnected, setIsConnected] = useState("");
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputs((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actionLogin(inputs);
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/hello", { method: "get" })
      .then((response) => response.json())
      .then((data) => setIsConnected(data.message))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container container-sm paper form-container">
      <h3>{isConnected}</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="form-group">
          <button type="reset" className="margin">
            Reset
          </button>
          <button type="submit" className="paper-btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
