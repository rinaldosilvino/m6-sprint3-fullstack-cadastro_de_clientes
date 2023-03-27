import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Controller from "./pages/controller";
import RegisterClient from "./pages/register/client";
import RegisterContact from "./pages/register/contact";
import UpdateClient from "./pages/update/client";
import UpdateContact from "./pages/update/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Controller />}></Route>
          <Route path="/RegisterClient" element={<RegisterClient />}></Route>
          <Route path="/RegisterContact" element={<RegisterContact />}></Route>
          <Route path="/UpdateClient" element={<UpdateClient />}></Route>
          <Route path="/UpdateContact" element={<UpdateContact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
