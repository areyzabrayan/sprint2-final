import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import Cards from "../cards/cards";
import Movie from "../movie/Movie";
import AdminPanel from "../adminPanel/AdminPanel";
import Boletos from "../boletos/boletos";
import SeatSelection from "../seatSelection/SeatSelection";
import BuyTikecks from "../buyTikecks/buyTikecks";
import FinalPurchase from "../finalPurchase/finalPurchase";
import QrTikecks from "../QR-tikecks/QrTikecks";

export const AppContext = createContext({});

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [cards, setCards] = useState([]);
  const [movie, setMovie] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedCinemaName, setSelectedCinemaName] = useState(null);
  const [seletDay, setseletDay] = useState("");
  const [newFormatted, setNewFormatted] = useState(""); //Fecha selecionada
  const [date, setdate] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState({});
  const [selectedButton, setSelectedButton] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null); //Total valor compra
  const [seatsSelection, setSeatsSelection] = useState([]); //Asientos seleccionados
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
        date,
        setdate,
        selectedDate,
        setSelectedDate,
        selectedId,
        setSelectedId,
        selectedButton,
        setSelectedButton,
        selectedCinemaName,
        setSelectedCinemaName,
        selectedMovieId,
        setSelectedMovieId,
        movie,
        setMovie,
        newFormatted,
        setNewFormatted,
        totalAmount,
        setTotalAmount,
        seatsSelection,
        setSeatsSelection,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<PublicRouter />}>
              <Route path="home" element={<Home />}>
                <Route index element={<Cards />} />
                <Route path="movie/:movieId" element={<Movie />} />
                <Route path="movie/:movieId/boletos" element={<Boletos />} />
                <Route
                  path="movie/:movieId/boletos/seating"
                  element={<SeatSelection />}
                />{" "}
                <Route
                  path="movie/:movieId/boletos/seating/form"
                  element={<BuyTikecks />}
                />
                <Route
                  path="movie/:movieId/boletos/seating/form/purchase"
                  element={<FinalPurchase />}
                />
                <Route
                  path="movie/:movieId/boletos/seating/form/purchase/QRTickets"
                  element={<QrTikecks />}
                />
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
