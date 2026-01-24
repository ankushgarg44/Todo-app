import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("jwt");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;