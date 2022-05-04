import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Share/Footer/Footer';
import Header from './Components/Share/Header/Header';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';



function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
