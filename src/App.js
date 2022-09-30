import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Slides from './pages/Slides';
import SearchBlock from './pages/Search__block';
import Career from './pages/Career';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { Item } from './components/itemInfo/Item';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
export const searchContext = React.createContext();

function App() {
  const [searchValue, setsearchValue] = React.useState('');

  return (
    <searchContext.Provider value={{ searchValue, setsearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/items" element={<Home />} />
              <Route path="/search" element={<SearchBlock />} />
              <Route path="/career" element={<Career />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/item" element={<Item />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<Slides />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </searchContext.Provider>
  );
}

export default App;
