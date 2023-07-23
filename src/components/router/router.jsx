import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AdminPanel from "../adminPanel/adminPanel";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import Cards from "../cards/cards";
import Movie from "../movie/Movie";

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter isAutenticate={isLogin} />}>
            <Route
              path="home"
              element={<Home signIn={setIsLogin} show={setShow} showV={show} />}
            >
              <Route index element={<Cards />} />
              <Route path="movie/:movieId" element={<Movie />} />
            </Route>
          </Route>
          <Route element={<PrivateRouter isAutenticate={isLogin} />}>
            <Route index element={<AdminPanel signIn={setIsLogin} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
