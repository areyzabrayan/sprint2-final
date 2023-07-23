import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './publicRouter'
import PrivateRouter from './privateRouter'
import Home from '../pages/home/Home'
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'



const Router = () => {
const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login signIn={setIsLogin} />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/*"
          element={
            isLogin ? <PrivateRouter isAuthenticate={isLogin} /> : <PublicRouter isAuthenticate={isLogin} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;