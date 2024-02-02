import React from 'react';
import Home from './Home';
import AllBeers from "./AllBeers";
import {HashRouter, Route, Routes} from "react-router-dom";
import Details from "./Details";


function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="allBeers" element={<AllBeers />} />
                <Route path="allBeers/details/*" element={<Details />} />
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;