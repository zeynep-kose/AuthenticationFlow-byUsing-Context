import React from "react";
import { useNavigate, BrowserRouter, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UseAuth";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <Outlet />
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;
