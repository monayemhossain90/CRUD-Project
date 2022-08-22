import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<ReadPage />} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
