import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListKehadiran } from "../../actions/kehadiran";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil list kehadiran dummy
    dispatch(getListKehadiran());
  }, [dispatch]);

  return <h1>Ini Halaman Home</h1>;
};

export default Home;
