import React from "react";
import Home from "./Components/Home";
import Billing from "./Components/billing/Billing";
import ApiBinding from "./Components/Appbinding/ApiBinding";
import Tredingview from "./Components/Tradingrecord/Tredingview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pairlist from "./Components/Tradingpair/Pairlist";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Billing" element={<Billing/>}></Route>
          <Route path="/TradingPair" element={<Pairlist/>}></Route>
          <Route path="/ApiBinding" element={<ApiBinding/>}></Route>
          <Route path="/Tredingview" element={ <Tredingview/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
