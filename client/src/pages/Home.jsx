import React from "react";
import Header from "../components/Home/Header/Header";
import SearchBar from "../components/Home/SearchBar/SearchBar";
import Movies from "../components/Home/Movies/Movies";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Movies />
    </div>
  );
}
