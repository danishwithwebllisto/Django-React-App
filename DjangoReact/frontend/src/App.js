import React from 'react';
import {render} from "react-dom"
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <>
    <Router>
      <Header title="iCode"/>

      <Routes>
        <Route exact path="/" element={<> <Home/> </>}/>
        <Route exact path="/about" element={<> <About/> </>}/>
        <Route exact path="/contact" element={<> <Contact/> </>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

     <Footer/>


    </Router>
    </>
);
    
}

export default App;
