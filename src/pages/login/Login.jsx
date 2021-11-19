import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;

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

    axios
      .post(BASE_URL + "/login", {
        username: inputs.username,
        password: inputs.password,
      })
      .then(function (response) {
        /**
         * Urutan Proses :
         * 1. Tampilkan animasi
         * 2. Simpan access-token ke localStorage yang nanti akan jadi bearer header
         * 3. Store informasi user ke Redux store
         * 4. Redirect ke halaman home
         * 5. Tampilkan model selamat datang
         */

        localStorage.setItem("access-token", response.data.token);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    /**
     * TODO, Jika user masih valid, halaman ini tidak bisa diakses
     * 1. Opsi kembalikan ke halaman sebelumnya,
     * 2. Kembalikan ke halaman home
     *
     */

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
