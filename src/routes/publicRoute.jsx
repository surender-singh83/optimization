import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";

function PublicRoute() {
    const isLoggedin =  localStorage.getItem("token");

  return !isLoggedin ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default PublicRoute;
