import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Controller from "./pages/contoller";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Controller type="CL" />}></Route>
          <Route
            path="/RegisterClient"
            element={<Register type="CT" />}
          ></Route>
          <Route
            path="/RegisterContact"
            element={<Register type="CT" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
