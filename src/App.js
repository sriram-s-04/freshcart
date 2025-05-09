import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Pages from "./components/Pages";
import Account from "./components/Account";
import Arr from "./components/Arr";
import RowCol from "./components/RowCol";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Arr" element={<Arr />} />
          <Route path="/row" element={<RowCol />} />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
