import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoinsNews from "./pages/CoinsNews";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import ParticularPage from "./pages/particularPage";
import TotalCoinPage from "./pages/TotalCoinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />}></Route>
          <Route path="totalCoins" element={<TotalCoinPage />}></Route>
          <Route path="coinNews" element={<CoinsNews />}></Route>
          <Route path="particularPage/:id" element={<ParticularPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
