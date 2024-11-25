import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Menu from "./views/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;