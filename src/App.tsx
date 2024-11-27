import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Menu from "./views/Menu";
import LoterryType from "./views/LoterryType";
import TicketSales from "./views/SaleLoterry";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/lotery-type" element={<LoterryType />} />
        <Route path="/lotery-draw" element={<LoterryType />} />
        <Route path="/sale-lotery" element={<TicketSales />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
