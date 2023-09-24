import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages_pertama from "./Admin/Pages_pertama";
import Pages_kedua from "./Admin/Pages_kedua";

export default function RootSection() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages_pertama />} />
          <Route path="/Kedua" element={<Pages_kedua />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}