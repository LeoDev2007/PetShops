import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Pets from './Components/Pets'
import Products from './Components/Products'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' exact element={<Home />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
