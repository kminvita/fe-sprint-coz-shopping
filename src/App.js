import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HeaderSection from './HeaderSection';
import Footer from './Footer';
import Main from './Pages/Main';
import Productlist from './Pages/Productlist';
import Bookmark from './Pages/Bookmark';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSection />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<Productlist />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
