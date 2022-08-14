import { Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import Home from "../../pages/Home/Home";
import Photos from "../../pages/Photos/Photos";
import GoldenBook from "../../pages/GoldenBook/GoldenBook";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/golden_book" element={<GoldenBook />} />
      </Routes>
    </>
  );
}
