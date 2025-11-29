import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import { LoadingContext } from "./context/LoadingContext";
import Loading from "./components/Loading/Loading";

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const user = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is Login:", user);
        navigate("/");
      } else {
        console.log("No user is Login.");
        navigate("/login");
      }
      setLoading(false);
    });

    return () => {
      user();
    };
  }, []);

  return (
    <div>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <Loading />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </LoadingContext.Provider>
    </div>
  );
};

export default App;
