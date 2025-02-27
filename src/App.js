import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';
import Middle from './components/Middle';
import Counter from './components/Counter';
import Expected from './components/Expected';
import Knowladge from './components/Knowladge';
import Plans from './components/Plans';
import Events from './components/Events';
import Eventize from './components/Eventize';
import Sponser from './components/Sponser';
import Articles from './components/Articles';
import Location from './components/Location';
import Footer from './components/Footer';
import Products from './components/Products';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import ProductDescription from './components/ProductDescription';
import Blog_description from './components/Blog_description';
import  Contact from  './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <DynamicHeader />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Event />
              <Middle />
              <Counter />
              <Expected />
              <Knowladge />
              <Plans />
              <Events />
              <Eventize />
              <Sponser />
              <Articles />
              <Location />
            </>
          } />
          <Route path="/news" element={<News />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/Blog_description/:id" element={<Blog_description />} />
          <Route path="/Contact" element={< Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function DynamicHeader() {
  const location = useLocation();
  const showHeaderOn = ['/news', '/product', '/Contact'];




  const shouldShowHeader = showHeaderOn.some(path => location.pathname.toLowerCase().startsWith(path.toLowerCase()));


  return shouldShowHeader ? <Header /> : null;
}

export default App;
