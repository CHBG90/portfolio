import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Culture from './pages/Culture';
import Cart from './pages/Cart';
import CultureDetail from './pages/CultureDetail';
import HealingDetail from './pages/HealingDetail';
import EventDetail from './pages/EventDetail';
import Footer from './pages/Footer';
import Header from './pages/Header';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

    <Header></Header>

    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='cult' element={<Culture/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Route>

      <Route path='cultureDetail/:id' element={<CultureDetail/>}></Route>
      <Route path='healingDetail/:id' element={<HealingDetail/>}></Route>
      <Route path='eventDetail/:id' element={<EventDetail/>}></Route>

    </Routes>

    <Footer></Footer>

    </div>
  );
}

export default App;