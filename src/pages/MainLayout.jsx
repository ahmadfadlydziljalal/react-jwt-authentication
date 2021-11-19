import React from "react";
import { Outlet } from "react-router-dom";
import { TopNavigation } from "../components/TopNavigation";

const MainLayout = () => {
  return (
    <div>
      <TopNavigation />

      <main className="container container-lg" style={{ marginTop: "4em" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
