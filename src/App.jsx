import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import Cart from './components/Cart/Cart.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="layout">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
