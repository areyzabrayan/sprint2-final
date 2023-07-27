import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import Cards from "../cards/cards";
import Movie from "../movie/Movie";
import AdminPanel from "../adminPanel/AdminPanel";

export const AppContext = createContext({});

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [cards, setCards] = useState([]);
  const [seletDay, setseletDay] = useState("");
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState("");
  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        show,
        setShow,
        category,
        setCategory,
        cards,
        setCards,
        seletDay,
        setseletDay,
        cinemas,
        setCinemas,
        selectedCinema,
        setSelectedCinema,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<PublicRouter />}>
              <Route path="home" element={<Home />}>
                <Route index element={<Cards />} />
                <Route path="movie/:movieId" element={<Movie />} />
              </Route>
            </Route>
            <Route element={<PrivateRouter />}>
              <Route path="private" element={<AdminPanel />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
