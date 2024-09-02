import "./App.css";
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Home from "./components/Homme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import Create from "./Components/Create";
// import Update from "./Components/Update";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route> */}
      </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
