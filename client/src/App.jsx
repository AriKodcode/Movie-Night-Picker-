import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { useStore } from "./store/zustandStore";
import MovieDetails from "./pages/MovieDetails";
import SelectSeats from "./pages/SelectSeats";

export default function App() {
  const loadCards = useStore((state) => state.loadCards);
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/" element={<SelectSeats />} />
      </Routes>
    </div>
  );
}
