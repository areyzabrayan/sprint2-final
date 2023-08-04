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
import Navbar from "../banner/navbar/Navbar";
import AdminEdit from "../adminEdit/adminEdit";
import { useForm } from "react-hook-form";

export const AppContext = createContext({});

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [cards, setCards] = useState([]);
  const [movie, setMovie] = useState([]);
  const [videoMovie, setVideoMovie] = useState(""); // variable de estado del video
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedCinemaName, setSelectedCinemaName] = useState(null);
  const [seletDay, setseletDay] = useState("");
  const [newFormatted, setNewFormatted] = useState(""); //Fecha selecionada
  const [date, setdate] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState({});
  const [totaltickets, setTotaltickets] = useState(""); // Cantidad de tiquetes que el cliente dese acomprar.
  const [selectedCinemaRooms, setSelectedCinemaRooms] = useState([]); // sala por cine seleccionado
  const [selectedButton, setSelectedButton] = useState(null); //Hora seleccionada
  const [totalAmount, setTotalAmount] = useState(null); //Total valor compra
  const [seatsSelection, setSeatsSelection] = useState([]); //Asientos seleccionados
  const [formData, setFormData] = useState(null);
  const [disabled, setDisabled] = useState(false);
  //estado del fomulario, captura cada elemento del formulario.

  const [formState, setFormState] = useState({
    email: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  // formulario desactivado

  return (
    <AppContext.Provider
      value={{
        formState,
        setFormState,
        disabled,
        setDisabled,
        formData,
        setFormData,
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
        selectedCinemaRooms,
        setSelectedCinemaRooms,
        totaltickets,
        setTotaltickets,
        videoMovie,
        setVideoMovie,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<PublicRouter />}>
              <Route element={<Home />}>
                <Route path="home" element={<Cards />} />
                <Route path="/movie/:movieId/">
                  <Route index element={<Movie />} />
                  <Route path="boletos" element={<Boletos />} />
                  <Route path="seating" element={<SeatSelection />} />
                  <Route path="form" element={<BuyTikecks />} />
                  <Route path="purchase" element={<FinalPurchase />} />
                  <Route path="QRTickets" element={<QrTikecks />} />
                </Route>
              </Route>
            </Route>
            <Route element={<PrivateRouter />}>
              <Route path="private" element={<AdminPanel />}>
                <Route index element={<Cards />} />
                <Route path="adminEdit" element={<AdminEdit />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
