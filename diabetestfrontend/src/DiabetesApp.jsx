import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './DiabetesApp.css';
import Home from './pages';
import TestPage from './pages/taketest';



 
const DiabetesApp = ()  => {
    return(
        <Router>
            <Routes>
               <Route path="/" element={<Home />} exact /> 
               <Route path="/taketest" element={<TestPage />} exact />
            </Routes>
        </Router>
    );
}
export default DiabetesApp;