import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const GET_LIST_KEHADIRAN = "GET_LIST_KEHADIRAN";

export const getListKehadiran = () => {
  return (dispatch) => {
    
    // Loading
    dispatch({
      type: GET_LIST_KEHADIRAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: BASE_URL + "/v1/kehadiran",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: GET_LIST_KEHADIRAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        dispatch({
          type: GET_LIST_KEHADIRAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
