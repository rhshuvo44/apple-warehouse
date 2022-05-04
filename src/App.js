import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Share/Footer/Footer';
import Header from './Components/Share/Header/Header';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Inventors from './Components/Pages/Home/Inventors/Inventors';
import Banner from './Components/Pages/Home/Banner/Banner'



function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventors" element={<Inventors />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
