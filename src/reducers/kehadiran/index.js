import { GET_LIST_KEHADIRAN } from "../../actions/kehadiran";

const initialState = {
  getListKehadiranResult: false,
  getListKehadiranLoading: false,
  getListKehadiranError: false,
};

const kehadiran = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KEHADIRAN:
      return {
        ...state,
        getListKehadiranResult: action.payload.data,
        getListKehadiranLoading: action.payload.loading,
        getListKehadiranError: action.payload.error,
      };
    default:
      return state;
  }
};

export default kehadiran;
