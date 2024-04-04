import logo from './logo.svg';
import './App.css';
import NavbarMenu from './NavbarMenu';
import Home from './components/Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drama from './components/Drama';
import About from './components/About';
import Generation from './components/Generation';
import Situation from './components/Situation';
import NGenre from './components/Genre copy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sen1 from './components/Sen1';
import LoveDive from './components/LoveDive';
import Ditto from './components/Ditto';

// Home 페이지
const HomePage = () => {
  return(
    <div className="Container">
      <Home/>
    </div>
  );
}
// Genre 페이지
const GenrePage = () => {
  return(
    <div className="Container">
      <NGenre/>
    </div>
  );
}
// About 페이지
const AboutPage = () => {
  return(
    <div className="Container">
      <About/>
    </div>
  );
}

// Generation 페이지
const GenerationPage = () => {
  return(
    <div className="Container">
      <Generation/>
    </div>
  );
}

// Situation 페이지
const SituationPage = () => {
  return(
    <div className="Container">
      <Situation/>
    </div>
  );
}
// 404 페이지
const NoPage = () => {
  return(
    <div className="Container">
      <h1>404 : Page Not Found</h1>
    </div>
  );
}

const SenPly1Page = () => {
  return(
    <div className="Container">
      <Sen1/>
    </div>
  );
}

const LoveDivePage = () => {
  return(
    <div className="Container">
      <LoveDive/>
    </div>
  );
}

const DittoPage = () => {
  return(
    <div className="Container">
      <Ditto/>
    </div>
  );
}


function App() {
  return (
    <div className="Whole">
    <div className='App'>
      <Router>
        <NavbarMenu/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/genre' element={<GenrePage/>} />
          <Route path='/generation' element={<GenerationPage/>} />
          <Route path='/situation' element={<SituationPage/>} />
          <Route path='/*' element={<NoPage/>} />
          <Route path='/Sen1' element={<SenPly1Page/>} />
          <Route path='/LOVEDIVE' element={<LoveDivePage/>} />
          <Route path='/Ditto' element={<DittoPage/>} />
        </Routes> 
      </Router>
    </div>
    </div>
  );
}

export default App;
