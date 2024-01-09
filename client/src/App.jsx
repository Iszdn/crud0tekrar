import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.css'
import WishlistPage from "./Pages/WishlistPage";
import Homepage from "./Pages/HomePage";
import BasketPage from "./Pages/BasketPage";
import Layout from "./Layout/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsPage from "./Pages/DetailsPage";
function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
