import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from './components/Products'

const  Routes = () => {
    return (
        <Routes>
           
            <Route path="/product" element={< Products />} />
        </Routes>
    );
};

export default Routes;
