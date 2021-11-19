import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// @POST Login (Nanti dari REDUX)
export const actionLogin = (inputs) => {
  axios
    .post(BASE_URL + "/login", {
      username: inputs.username,
      password: inputs.password,
    })
    .then(function (response) {
      // TODO
      // 1. Jika berhasil login, rediret ke halaman home alias `/`

      localStorage.setItem("access-token", response.data.token);
      navigate("/");
    })
    .catch(function (error) {
      console.log(error);
    });
};
