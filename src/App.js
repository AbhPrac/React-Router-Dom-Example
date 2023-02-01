import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login';
import ProductDetialPage from './components/productdetailpage';
import HomePage from './components/homepage';
import RegistrationPage from './components/registrationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/homePage" element={<HomePage/>}></Route>
      <Route path="/registrationPage" element={<RegistrationPage/>}></Route>
      <Route path="/productdetailpage" element={<ProductDetialPage/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
