import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "./router";

const PrivateRouter = ({ isAutenticate }) => {
  const { isLogin } = useContext(AppContext);
  return <div>{isLogin ? <Outlet /> : <Navigate to={"/home"} />}</div>;
};

export default PrivateRouter;
