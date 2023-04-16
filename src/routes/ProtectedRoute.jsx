import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";

function CustomRoute() {
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const isLoggedin =  localStorage.getItem("token");


  return isLoggedin ? <Outlet /> : <Navigate to="/" />;
}

export default CustomRoute;
