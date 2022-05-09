import React from "react";
import { ToastContainer } from 'react-toastify';
import './toast.scss';
import "./App.scss";
import Text from "./pages/Text";

import Login from "./pages/form";


const App = () => {
  return (
    <>
      <Text/>
      <Login />
      <ToastContainer />
    </>
  )
  
};

export default App;
