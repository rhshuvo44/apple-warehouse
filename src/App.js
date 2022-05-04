import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import InventorDetails from "./Components/Pages/Home/InventorDetails/InventorDetails";
import Inventors from "./Components/Pages/Home/Inventors/Inventors";
import Login from "./Components/Pages/Login/Login/Login";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";
import NotFound from "./Components/Share/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventors" element={<Inventors />} />
        <Route path="/inventors/:id" element={<InventorDetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
