import './App.css'
import ApiComponent from "./pages/ApiComponent";

import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      {/* <Nav /> */}
       <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/page1" element={<Page1 />} /> */}
        {/* <Route path="/page2/:symbol" element={<Page2 />} /> */}
        <Route path="/placebear" element={<ApiComponent />} />
      </Routes>
    </div>
  )
}

export default App
// hello