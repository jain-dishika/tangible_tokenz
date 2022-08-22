// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'tippy.js/dist/tippy.css';
import ManWear from './components/ManWear';
import Page from './components/Page'
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Ladies from './components/Ladies'
import Hoodie from './components/Hoodie'
import Mug from './components/Mug'
import MetalSign from './components/MetalSign';

function App() {
  return (
      <div className='App'>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Page/>} />
          <Route path="Manwear" element={<ManWear/>} />
          <Route path="Ladies" element={<Ladies/>} />
          <Route path="Hoodie" element={<Hoodie/>} />
          <Route path="Mug" element={<Mug/>} />
          <Route path="MetalSign" element={<MetalSign/>} />
        </Routes>
        <Footer/>
      </div>
  );
}
export default App;
