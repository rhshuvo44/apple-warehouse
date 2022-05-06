import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Additem from "./Components/Pages/Home/Additem/Additem";
import Home from "./Components/Pages/Home/Home/Home";
import InventorDetails from "./Components/Pages/Home/InventorDetails/InventorDetails";
import InventorManage from "./Components/Pages/Home/InventorManage/InventorManage";
import Inventors from "./Components/Pages/Home/Inventors/Inventors";
import MyItem from "./Components/Pages/Home/MyItem/MyItem";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";
import NotFound from "./Components/Share/NotFound/NotFound";
import RequiredAuth from "./Components/Share/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventors" element={<Inventors />} />
        <Route path="/inventors/:id" element={
          <RequiredAuth>
            <InventorDetails />
          </RequiredAuth>
          
        } />
        <Route path="/inventorManage" element={
          <RequiredAuth>
            <InventorManage />
          </RequiredAuth>
        } />
        <Route path="/addItem" element={
          <RequiredAuth><Additem /></RequiredAuth>
        } />
        <Route path="/myItem" element={
          <RequiredAuth><MyItem /></RequiredAuth>
        } />
        <Route path="/itemUpdate" element={
          <RequiredAuth><MyItem /></RequiredAuth>
        } />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
