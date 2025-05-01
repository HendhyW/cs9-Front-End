import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/Profile";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* redirect ke login */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/products" element={<ProductPage/>}/>

        <Route path="/home" element={<HomePage/>}/>

        <Route path="/profile" element={<ProfilePage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
