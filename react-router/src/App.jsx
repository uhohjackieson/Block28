import { Routes, Route } from "react-router-dom";

export default function App() {

return (
<div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
      <Routes> 
        <Route path="/blue" element={<h1>Blue</h1>} />
      </Routes>
      </div>
      <div id="main-section">
      <Routes> 
        <Route path="/red" element={<h1>Red</h1>} />
      </Routes>
      </div>
    </div>
)}
