import logo from "./logo.svg";
import "./App.css";
import Players from "./components/Players";
import { Route, Routes } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Players/>}></Route>
        <Route path='/add' element={<AddPlayer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
