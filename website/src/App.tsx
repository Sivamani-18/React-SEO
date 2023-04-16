import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/about' element={<About />} />
    // </Routes>
    <Home />
  );
};

export default App;
