import React from "react";
import Pages from "./Pages/Page2";
import Page1 from "./Pages/Page1";
import { Routes, Route } from "react-router-dom";

const App = () => {

 
  return <>

      <Routes>
          <Route path="/" element={<Page1/>} />
          <Route path="/main" element={<Pages/>}/>
        </Routes>    
  </>
};

export default App;
