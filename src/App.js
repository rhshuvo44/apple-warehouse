import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Additem from "./Components/Pages/Home/Additem/Additem";
import Home from "./Components/Pages/Home/Home/Home";
import InventorDetails from "./Components/Pages/Home/InventorDetails/InventorDetails";
import InventorManage from "./Components/Pages/Home/InventorManage/InventorManage";
import Inventors from "./Components/Pages/Home/Inventors/Inventors";
import ItemUpdate from "./Components/Pages/Home/ItemUpdate/ItemUpdate";
import MyItem from "./Components/Pages/Home/MyItem/MyItem";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";
import NotFound from "./Components/Share/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventors" element={<Inventors />} />
        <Route path="/inventors/:id" element={<InventorDetails />} />
        <Route path="/inventorManage" element={<InventorManage />} />
        <Route path="/addItem" element={<Additem />} />
        <Route path="/myItem" element={<MyItem />} />
        <Route path="/itemUpdate" element={<ItemUpdate />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
